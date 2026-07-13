# Lexora - Legal RAG Backend

## Overview

This repository contains the **Legal Retrieval-Augmented Generation (RAG) backend** for **Lexora**, an AI-powered legal assistant. The backend retrieves relevant legal information from a vector database built from legal documents and generates accurate, context-aware responses using **Google Gemma**.

The backend exposes a FastAPI service that can be integrated with the main backend and frontend applications.

---

## Features

- 📄 PDF document ingestion
- 🧩 Automatic document chunking
- 🔍 Semantic search using ChromaDB
- 🧠 AI-generated legal answers using Google Gemma
- 🌍 Metadata filtering
  - Country
  - Location
  - Category
- 📚 Source citations with page numbers
- 🔗 Direct PDF links for referenced legal documents
- ⚡ FastAPI REST API
- 📖 Interactive Swagger documentation

---

## Tech Stack

- Python 3.12+
- FastAPI
- LangChain
- ChromaDB
- HuggingFace Embeddings (BAAI/bge-m3)
- Google Gemma
- PyPDF
- python-dotenv

---

## Project Structure

```
backend_data/
│
├── api.py                  # FastAPI application
├── ingest.py               # Creates the Chroma vector database
├── requirements.txt
├── README.md
│
├── chroma_db/              # Pre-built vector database
├── data/                   # Legal PDF documents
│
└── src/
    ├── config.py
    ├── loader.py
    ├── llm.py
    ├── pdf_links.py
    ├── rag_chain.py
    ├── retriever.py
    ├── vectorstore.py
    └── ...
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the backend

```bash
cd backend_data
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

### 4. Activate the virtual environment

Windows

```bash
.venv\Scripts\activate
```

Mac/Linux

```bash
source .venv/bin/activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file inside the project directory.

```env
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

---

## Chroma Database

A pre-built Chroma vector database is included with the project.

**You do NOT need to run `ingest.py`** unless:

- New PDF documents are added.
- Existing legal documents are modified.
- The vector database needs to be rebuilt.

---

## Running the API

Start the FastAPI server.

```bash
uvicorn api:app --reload
```

The server runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## API Endpoint

### POST `/retrieve`

Retrieves relevant legal documents and generates an AI-powered response.

### Request

```json
{
    "question": "What are the conditions for bail?",
    "country": "India",
    "location": "Delhi",
    "category": "Crime"
}
```

All metadata filters are optional.

---

### Response

```json
{
    "answer": "...",

    "sources": [
        {
            "document": "bnss.pdf",
            "page": 158,
            "country": "india",
            "location": "delhi",
            "category": "crime",
            "pdf_url": "https://..."
        }
    ]
}
```

---

## Metadata Filtering

The retriever supports optional filtering based on:

- Country
- Location
- Category

Filters are **case-insensitive**.

Examples:

```
India
india
INDIA
```

All produce the same result.

---

## Source References

Each response includes:

- Document name
- Page number
- Country
- Location
- Category
- Direct link to the original legal document (where available)

This allows users to verify the AI-generated response using the original legal source.

---

## Embedding Model

```
BAAI/bge-m3
```

---

## Language Model

```
Google Gemma
```

---

## Notes

- Responses are generated only from retrieved legal documents.
- If no relevant documents are found, the API returns a user-friendly message instead of an error.
- Metadata filtering improves retrieval accuracy for jurisdiction-specific legal queries.

---

## Future Improvements

- Multi-jurisdiction support
- Citation highlighting
- Hybrid keyword + semantic search
- Conversation memory
- Legal document upload and indexing
- Additional legal datasets

---

## Developed For

**Lexora**

An AI-powered legal assistance platform designed to simplify legal information retrieval, improve accessibility to legal resources, and provide context-aware legal guidance using Retrieval-Augmented Generation (RAG).