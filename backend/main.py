from typing import List

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    price: float
    location: str


class ResponseMessage(BaseModel):
    message: str


@app.get("/items/", response_model=List[Item])
async def read_items():
    return [
        {"name": "Portal Gun", "price": 42.0, "location": "test2"},
        {"name": "Plumbus", "price": 32.0, "location": "test2"},
    ]


@app.post("/items/", response_model=ResponseMessage)
async def create_item(item: Item):
    return {"message": "item received"}
