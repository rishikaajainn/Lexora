from src.retriever import LegalRetriever
from src.llm import LegalLLM
from src.prompts import LEGAL_PROMPT


class LegalRAG:

    def __init__(self):

        self.retriever = LegalRetriever()
        self.llm = LegalLLM().get_llm()

    def ask(
        self,
        question: str,
        country: str = None,
        location: str = None,
        category: str = None,
        k: int = 5,
    ):

        # -----------------------------
        # Retrieve relevant documents
        # -----------------------------

        docs = self.retriever.retrieve_context(
            question=question,
            country=country,
            location=location,
            category=category,
            k=k,
        )

        if not docs:
            return {
                "answer": (
                "I couldn't find relevant legal information for your question "
                "using the provided country, location, and category."
                ),
                "sources": [],
            }

        # -----------------------------
        # Build context for Gemma
        # -----------------------------

        context_parts = []

        for doc in docs:

            context_parts.append(
                f"""
        Document: {doc['source']}
        Country: {doc['country']}
        Location: {doc['location']}
        Category: {doc['category']}
        Page: {doc['page']}

        Content:
        {doc['text']}
        """
           )

        context = "\n\n=====================================\n\n".join(context_parts)
        # -----------------------------
        # Build prompt
        # -----------------------------

        prompt = LEGAL_PROMPT.format(
            context=context,
            question=question,
        )

        # -----------------------------
        # Ask Gemma
        # -----------------------------

        response = self.llm.invoke(prompt)

        # -----------------------------
        # Extract response text
        # -----------------------------

        answer = ""

        if hasattr(response, "content"):

            if isinstance(response.content, str):

                answer = response.content

            elif isinstance(response.content, list):

                for part in response.content:

                    if (
                        isinstance(part, dict)
                        and part.get("type") == "text"
                    ):
                        answer += part["text"]

        # -----------------------------
        # Sources
        # -----------------------------

        sources = []

        seen = set()

        for doc in docs:

            key = (doc["source"], doc["page"])

            if key not in seen:

                seen.add(key)

                sources.append(
                    {
                        "document": doc["source"],
                        "page": doc["page"],
                        "category": doc["category"],
                        "location": doc["location"],
                    }
                )

        return {
            "answer": answer,
            "sources": sources,
        }