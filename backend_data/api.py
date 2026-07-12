from fastapi import FastAPI
from pydantic import BaseModel

from src.rag_chain import LegalRAG

app = FastAPI(
    title="RGlobe Legal RAG API",
    version="1.0.0"
)

rag = LegalRAG()


class ChatRequest(BaseModel):
    question: str
    country: str | None = None
    location: str | None = None
    category: str | None = None


@app.get("/")
def home():
    return {
        "message": "RGlobe Legal API is running."
    }


@app.post("/chat")
def chat(request: ChatRequest):

    response = rag.ask(
        question=request.question,
        country=request.country,
        location=request.location,
        category=request.category,
    )

    return response