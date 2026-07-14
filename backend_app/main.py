from fastapi import FastAPI

from app.routes.analyse import router as analyze_router
from app.routes.documents import router as document_router
app = FastAPI(
    title="AI Legal Assistant",
    version="1.0.0"
)

app.include_router(analyze_router)


@app.get("/")
def home():
    return {
        "message": "AI Legal Assistant Backend Running"
    }
    
    
from app.routes.legal import router as legal_router

app.include_router(
    legal_router,
    prefix="/legal-advisor",
    tags=["Legal Advisor"],
)

app.include_router(
    document_router,
    prefix="/document-analyzer",
    tags=["Document Analyzer"],
)