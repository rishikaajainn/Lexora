import easyocr
import os


class OCRService:

    def __init__(self):

        print("Loading OCR Model...")

        self.reader = easyocr.Reader(
            [
                "en",
                "hi",
                "bn",
                "ta",
                "te",
                "mr",
                "kn",
                "ur",
                "es",
                "de",
                "fr",
                "pt"
            ],
            gpu=False
        )

        print("OCR Model Loaded Successfully.")

    def extract_text(self, image_path: str):

        if not os.path.exists(image_path):
            raise FileNotFoundError("Document not found.")

        result = self.reader.readtext(
            image_path,
            detail=0,
            paragraph=True
        )

        text = "\n".join(result)

        return text


ocr_service = OCRService()