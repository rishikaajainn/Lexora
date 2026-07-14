from app.services.gemma import gemma_service
from app.services.validator import validate_response


class DocumentGenerator:

    def generate_document(
        self,
        document_type: str,
        user_details: dict,
        language: str = "English"
    ):

        prompt = f"""
You are LexAI, an expert legal assistant.

Generate a professionally formatted legal document.

Document Type:
{document_type}

User Details:
{user_details}

Rules:

1. Write in {language}
2. Use professional legal formatting.
3. Leave placeholders if information is missing.
4. Make the document ready for download.
5. Return ONLY JSON.

Return:

{{
    "title":"",
    "document":"",
    "checklist":[],
    "additional_documents":[],
    "disclaimer":""
}}
"""

        response = gemma_service.analyze_case(prompt)

        return validate_response(response)


document_generator = DocumentGenerator()