import os
import shutil
import uuid

from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File
from fastapi import Form
from fastapi import HTTPException

from app.services.document_analyser import document_analyzer

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/analyze")
async def analyze_document(
    file: UploadFile = File(...),
    language: str = Form("English"),
):

    try:

        extension = file.filename.split(".")[-1]

        filename = f"{uuid.uuid4()}.{extension}"

        file_path = os.path.join(
            UPLOAD_FOLDER,
            filename,
        )

        with open(file_path, "wb") as buffer:

            shutil.copyfileobj(
                file.file,
                buffer,
            )

        result = document_analyzer.analyze_document(
            file_path=file_path,
            response_language=language,
        )

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )

    finally:

        if os.path.exists(file_path):

            os.remove(file_path)