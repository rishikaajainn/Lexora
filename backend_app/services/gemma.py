import json

from openai import OpenAI

from app.config import HF_TOKEN


class GemmaService:

    def __init__(self):

        self.client = OpenAI(
            base_url="https://router.huggingface.co/v1",
            api_key=HF_TOKEN,
        )

        self.model = "google/gemma-4-31B-it:novita"

    # ---------------------------------
    # Normal Generation
    # ---------------------------------

    def generate(
        self,
        prompt: str,
        system_prompt: str = "You are an expert multilingual AI legal assistant.",
        temperature: float = 0.3,
        max_tokens: int = 2048,
    ):

        completion = self.client.chat.completions.create(
            model=self.model,
            temperature=temperature,
            max_tokens=max_tokens,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
        )

        return completion.choices[0].message.content

    # ---------------------------------
    # Streaming Generation
    # ---------------------------------

    def stream_generate(
        self,
        prompt: str,
        system_prompt: str = "You are an expert multilingual AI legal assistant.",
        temperature: float = 0.3,
        max_tokens: int = 2048,
    ):

        stream = self.client.chat.completions.create(
            model=self.model,
            temperature=temperature,
            max_tokens=max_tokens,
            stream=True,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
        )

        for chunk in stream:

            if not chunk.choices:
                continue

            delta = chunk.choices[0].delta.content

            if delta:
                yield delta

    # ---------------------------------
    # JSON Generation
    # ---------------------------------

    def generate_json(
        self,
        prompt: str,
        system_prompt: str = "Return ONLY valid JSON.",
    ):

        response = self.generate(
            prompt,
            system_prompt=system_prompt,
        )

        try:
            return json.loads(response)

        except Exception:
            return {
                "raw_response": response
            }

    def analyze_case(self, prompt: str):
        return self.generate_json(prompt)


gemma_service = GemmaService()