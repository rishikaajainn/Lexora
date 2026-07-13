import os
from typing import Dict

import whisper


LANGUAGE_MAP = {
    "en": "English",
    "hi": "Hindi",
    "de": "German",
    "es": "Spanish",
    "fr": "French",
    "bn": "Bengali",
    "ta": "Tamil",
    "te": "Telugu",
    "mr": "Marathi",
    "gu": "Gujarati",
    "kn": "Kannada",
    "ml": "Malayalam",
    "pa": "Punjabi",
    "ur": "Urdu",
    "ja": "Japanese",
    "ko": "Korean",
    "zh": "Chinese",
    "ru": "Russian",
    "it": "Italian",
    "pt": "Portuguese",
    "ar": "Arabic",
    "tr": "Turkish",
    "nl": "Dutch"
}


class SpeechService:

    def __init__(self):

        print("Loading Whisper Model...")

        # Available models:
        # tiny
        # base
        # small
        # medium
        # large

        self.model = whisper.load_model("small")

        print("Whisper Loaded Successfully!")

    def speech_to_text(self, audio_path: str) -> Dict:
        """
        Converts speech into text and detects the language.
        """

        if not os.path.exists(audio_path):
            raise FileNotFoundError(f"Audio file not found: {audio_path}")

        try:

            result = self.model.transcribe(
                audio_path,
                fp16=False
            )

            language_code = result["language"]

            return {
                "processing_status": "success",
                "text": result["text"].strip(),
                "language_code": language_code,
                "language": LANGUAGE_MAP.get(
                    language_code,
                    language_code
                )
            }

        except Exception as e:

            return {
                "processing_status": "failed",
                "error": str(e)
            }

    def transcribe_with_language(
        self,
        audio_path: str,
        expected_language: str = None
    ) -> Dict:
        """
        Converts speech into text and optionally compares
        the detected language with an expected language.
        """

        response = self.speech_to_text(audio_path)

        if response["processing_status"] == "failed":
            return response

        if expected_language is None:

            response["language_match"] = None

        else:

            response["language_match"] = (
                response["language"].lower()
                == expected_language.lower()
            )

        return response


speech_service = SpeechService()