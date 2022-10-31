import json
import os
import sys
import numpy as np
from PIL import Image
from pymilvus import CollectionSchema, FieldSchema, DataType, Collection, connections
from tqdm import tqdm
from transformers import CLIPProcessor, CLIPModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os.path
from os import path
import base64

print("Starting app...")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

connections.connect("default", host="milvus-standalone", port="19530")

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


def validate_json(json_data):
    try:
        json.loads(json_data)
    except ValueError as err:
        return False
    return True


def upload_data():
    template = open("/src/data/template.json", "r")
    exits = path.exists("/src/data/elements_list.json")
    if exits:
        with open("/src/data/elements_list.json", "r") as f:
            file_content = f.read()
            if not validate_json(file_content):
                os.remove("/src/data/elements_list.json")
                exits = False

    if not exits:
        data = json.loads(template.read())
    else:
        with open("/src/data/elements_list.json", "r") as f:
            data = json.loads(f.read())

    with open("/src/data/elements_list.json", "w") as elements_file:

        data_dir = "/src/data/images/"
        for filename in tqdm(os.listdir(data_dir)):
            if filename.endswith(".jpg"):
                try:
                    img = Image.open(os.path.join(data_dir, filename))
                except:
                    print("Error opening file: " + filename)
                    continue

                try:
                    input_ids = processor(text=None, images=img, return_tensors="pt", padding=True)
                except:
                    print("Error processing file: " + filename)
                    continue
                img = model.get_image_features(**input_ids)
                img = np.array(img.detach())
                img = img.reshape(1, -1)
                rm = collection.insert([img])
                data.append({"id": rm.primary_keys[0], "path": data_dir + filename})

        json.dump(data, elements_file, indent=4, separators=(',', ': '))


model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

if len(sys.argv) > 1:
    if sys.argv[1] == "upload_data":
        upload_data()

search_params = {"metric_type": "L2", "params": {"nprobe": 10}}


@app.get("/query/{words}", response_model=list)
async def read_user_item(words: str):

    print("\n\nQuerying...")

    print(f"Query: {words}")

    inputs = processor(text=words, images=None, return_tensors="pt", padding=True)

    vector = model.get_text_features(**inputs)
    vector = np.array(vector.detach())
    vector = vector.reshape(1, -1)

    results = collection.search(data=vector, anns_field="vector", param=search_params, limit=9)

    response = []

    print("Search results...")

    with open("/src/data/elements_list.json", "r") as f:
        data = json.loads(f.read())
        for i in range(len(results[0])):
            for element in data:
                if element["id"] == results[0][i].id:
                    with open(element["path"], "rb") as image:
                        content = image.read()
                        base64_bytes = base64.b64encode(content)
                        response.append({"id": element["id"], "path": element["path"], "image": base64_bytes})

    return response
