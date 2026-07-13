from app.services.ocr import ocr_service
from app.services.gemma import gemma_service
from app.services.pdf_highlighter import pdf_highlighter

from app.prompt.prompt_builder import PromptBuilder
from app.prompt.system_prompt import LEGAL_SYSTEM_PROMPT


class DocumentAnalyzer:

    def analyze_document(
        self,
        file_path: str,
        response_language: str = "English"
    ):

        # ----------------------------------
        # Step 1: OCR
        # ----------------------------------

        document_text = ocr_service.extract_text(file_path)

        if not document_text.strip():

            return {
                "success": False,
                "message": "No text could be extracted from the uploaded document."
            }

        # ----------------------------------
        # Step 2: Build Prompt
        # ----------------------------------

        prompt = PromptBuilder.build_document_analysis_prompt(
            document_text=document_text,
            response_language=response_language
        )

        # ----------------------------------
        # Step 3: Gemma Analysis
        # ----------------------------------

        result = gemma_service.generate_json(
            prompt=prompt,
            system_prompt=LEGAL_SYSTEM_PROMPT
        )

        if not isinstance(result, dict):

            return {
                "success": False,
                "message": "Gemma returned an invalid response."
            }

        # ----------------------------------
        # Step 4: Highlight PDF
        # ----------------------------------

        highlighted_pdf = None

        if "annotations" in result:

            try:

                highlighted_pdf = pdf_highlighter.highlight_pdf(
                    pdf_path=file_path,
                    annotations=result["annotations"],
                )

            except Exception as e:

                print("Highlight Error:", e)

        # ----------------------------------
        # Step 5: Attach Highlighted PDF
        # ----------------------------------

        result["highlighted_pdf"] = highlighted_pdf
        result["success"] = True

        return result


document_analyzer = DocumentAnalyzer()