from typing import Optional

from src.vectorstore import VectorStore

from src.pdf_links import PDF_LINKS

class LegalRetriever:

    def __init__(self):
        self.db = VectorStore().get_db()

    def retrieve_context(
        self,
        question: str,
        country: Optional[str] = None,
        location: Optional[str] = None,
        category: Optional[str] = None,
        k: int = 5,
    ):

        # -----------------------------
        # Normalize filters
        # -----------------------------

        if country:
            country = country.strip().lower()

        if location:
            location = location.strip().lower()

        if category:
            category = category.strip().lower()

        # -----------------------------
        # Build filter conditions
        # -----------------------------

        conditions = []

        if country:
            conditions.append({"country": country})

        if location:
            conditions.append({"location": location})

        if category:
            conditions.append({"category": category})

        # -----------------------------
        # Retrieve documents
        # -----------------------------

        if len(conditions) == 0:

            docs = self.db.similarity_search(
                query=question,
                k=k,
            )

        elif len(conditions) == 1:

            docs = self.db.similarity_search(
                query=question,
                k=k,
                filter=conditions[0],
            )

        else:

            docs = self.db.similarity_search(
                query=question,
                k=k,
                filter={
                    "$and": conditions
                },
            )

        # -----------------------------
        # Convert documents
        # -----------------------------

        results = []

        for doc in docs:

            source = doc.metadata.get("source")

            results.append(
                {
                    "text": doc.page_content,
                    "source": source,
                    "page": doc.metadata.get("page"),
                    "country": doc.metadata.get("country"),
                    "location": doc.metadata.get("location"),
                    "category": doc.metadata.get("category"),
                    "pdf_url": PDF_LINKS.get(source),
                }
            )

        return results