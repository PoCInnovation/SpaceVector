import os
import sys

import numpy as np
from PIL import Image
from pymilvus import CollectionSchema, FieldSchema, DataType, Collection, connections
from tqdm import tqdm
from transformers import CLIPProcessor, CLIPModel
from fastapi import FastAPI

backend = FastAPI()

connections.connect("default", host="localhost", port="19530")

collection_name = "SpaceVectorData"
dim = 512
default_fields = [
    FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
    FieldSchema(name="vector", dtype=DataType.FLOAT_VECTOR, dim=dim)
]
default_schema = CollectionSchema(fields=default_fields, description="Image data")

collection = Collection(name=collection_name, schema=default_schema)

default_index = {"index_type": "IVF_SQ8", "params": {"nlist": 512}, "metric_type": "L2"}
collection.create_index(field_name="vector", index_params=default_index)
collection.load()


def upload_data():
    data_dir = "./data/images/"
    for filename in tqdm(os.listdir(data_dir)):
        if filename.endswith(".jpg"):
            img = Image.open(os.path.join(data_dir, filename))
            input_ids = processor(text=None, images=img, return_tensors="pt", padding=True)
            img = model.get_image_features(**input_ids)
            img = np.array(img.detach())
            img = img.reshape(1, -1)
            rm = collection.insert([img])
            print(rm)


model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

if len(sys.argv) > 1:
    if sys.argv[1] == "upload_data":
        upload_data()

search_params = {"metric_type": "L2", "params": {"nprobe": 10}}


@backend.get("/query/")
async def read_user_item():
    params = "pool"

    print(f"Query: {params}")

    inputs = processor(text=params, images=None, return_tensors="pt", padding=True)

    vector = model.get_text_features(**inputs)
    vector = np.array(vector.detach())
    vector = vector.reshape(1, -1)

    print("Searching...")
    results = collection.search(data=vector,
                                anns_field="vector",
                                param=search_params,
                                limit=1)

    hits = results[0]
    print(f"\n\n\n")
    print(f"- Total hits: {len(hits)}, hits ids: {hits.ids} ")
    print(f"- Top1 hit id: {hits[0].id}, distance: {hits[0].distance}, score: {hits[0].score} ")

    query_result = collection.query(expr="id ==" + str(hits[0].id),
                                    output_fields=["vector"],
                                    consistency_level="Strong")
    print(f"\n\n\n")
    print(f"- Query result:\n{query_result}")

    collection.release()
    return query_result
