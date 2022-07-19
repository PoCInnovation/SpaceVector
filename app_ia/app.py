import os

import numpy as np
from PIL import Image
from pymilvus import CollectionSchema, FieldSchema, DataType, Collection, connections
from tqdm import tqdm
from transformers import CLIPProcessor, CLIPModel


def connect_db():
    connections.connect("default", host="localhost", port="19530")


class App:
    def __init__(self):
        connect_db()
        self.collection_name = "SpaceVectorData"
        self.dim = 512
        self.default_fields = [
            FieldSchema(name="id", dtype=DataType.INT64, is_primary=True, auto_id=True),
            FieldSchema(name="vector", dtype=DataType.FLOAT_VECTOR, dim=self.dim),
            FieldSchema(name="path", dtype=DataType.STRING)
        ]
        self.default_schema = CollectionSchema(fields=self.default_fields, description="Image data")

        self.collection = Collection(name=self.collection_name, schema=self.default_schema)

        self.default_index = {"index_type": "IVF_SQ8", "params": {"nlist": 512}, "metric_type": "L2"}
        self.collection.create_index(field_name="vector", index_params=self.default_index)
        self.collection.load()

        self.data_dir = "./data/images/"

        self.model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
        self.processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

    def upload_data(self):
        for filename in tqdm(os.listdir(self.data_dir)):
            if filename.endswith(".jpg"):
                img = Image.open(os.path.join(self.data_dir, filename))
                input_ids = self.processor(text=None, images=img, return_tensors="pt", padding=True)
                img = self.model.get_image_features(**input_ids)
                img = np.array(img.detach())
                img = img.reshape(1, -1)
                mr = self.collection.insert([img, filename])


def main():
    print(f"Prepare App...")
    app = App()

    app.upload_data()

    search_params = {"metric_type": "L2", "params": {"nprobe": 10}}

    inputs = app.processor(text=["A airport"], images=None, return_tensors="pt", padding=True)

    vector = app.model.get_text_features(**inputs)
    vector = np.array(vector.detach())
    vector = vector.reshape(1, -1)

    print("Searching...")
    results = app.collection.search(data=vector,
                                    anns_field="vector",
                                    param=search_params,
                                    limit=1)

    hits = results[0]
    print(f"\n\n\n")
    print(f"- Total hits: {len(hits)}, hits ids: {hits.ids} ")
    print(f"- Top1 hit id: {hits[0].id}, distance: {hits[0].distance}, score: {hits[0].score} ")

    query_result = app.collection.query(expr="id ==" + str(hits[0].id),
                                        output_fields=["vector", "path"],
                                        consistency_level="Strong")
    print(f"\n\n\n")
    print(f"- Query result:\n{query_result}")

    app.collection.release()


if __name__ == "__main__":
    main()
