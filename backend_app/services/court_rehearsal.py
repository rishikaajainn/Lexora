from app.services.gemma import gemma_service
from app.services.validator import validate_response


class CourtRehearsal:

    def start_session(
        self,
        case_type: str,
        role: str,
        case_summary: str,
        language: str = "English",
        difficulty: str = "Beginner"
    ):

        prompt = f"""
You are LexAI, an AI Legal Assistant.

You are acting as a professional {role}.

Case Type:
{case_type}

Difficulty:
{difficulty}

Case Summary:
{case_summary}

Language:
{language}

Your task is to begin a realistic court rehearsal.

Rules:

1. Introduce yourself.
2. Explain the courtroom setting.
3. Ask ONLY ONE question.
4. Do not answer the question yourself.
5. Wait for the user's reply.
6. Stay in character.
7. Respond ONLY in {language}.
8. Return ONLY valid JSON.

Return this format:

{{
    "introduction":"",
    "court_role":"",
    "case_type":"",
    "difficulty":"",
    "question":"",
    "tips":[]
}}
"""

        response = gemma_service.analyze_case(prompt)

        return validate_response(response)

    def evaluate_answer(
        self,
        role: str,
        question: str,
        answer: str,
        language: str = "English"
    ):

        prompt = f"""
You are LexAI acting as a {role}.

Question:
{question}

User Answer:
{answer}

Evaluate the user's answer.

Rules:

1. Score out of 100.
2. Explain strengths.
3. Explain weaknesses.
4. Mention missing legal points.
5. Suggest improvements.
6. Ask the NEXT courtroom question.
7. Return ONLY JSON.
8. Respond ONLY in {language}.

Return format:

{{
    "score":0,
    "strengths":[],
    "weaknesses":[],
    "missing_points":[],
    "suggestions":[],
    "next_question":""
}}
"""

        response = gemma_service.analyze_case(prompt)

        return validate_response(response)

    def generate_final_report(
        self,
        case_type: str,
        role: str,
        session_history: list,
        language: str = "English"
    ):

        prompt = f"""
You are LexAI.

The following is a completed courtroom rehearsal.

Case Type:
{case_type}

Court Role:
{role}

Conversation History:

{session_history}

Generate a final performance report.

Rules:

1. Score the user.
2. Evaluate confidence.
3. Evaluate communication.
4. Evaluate legal accuracy.
5. Evaluate evidence presentation.
6. Evaluate timeline clarity.
7. Mention strengths.
8. Mention weaknesses.
9. Mention legal concepts that were missed.
10. Recommend improvements.
11. Give final feedback.
12. Return ONLY JSON.
13. Respond ONLY in {language}.

Return format:

{{
    "overall_score":0,
    "confidence_level":"",
    "communication":0,
    "legal_accuracy":0,
    "argument_strength":0,
    "evidence_usage":0,
    "timeline_clarity":0,
    "strengths":[],
    "weaknesses":[],
    "missing_legal_points":[],
    "recommended_improvements":[],
    "final_feedback":""
}}
"""

        response = gemma_service.analyze_case(prompt)

        return validate_response(response)


court_rehearsal = CourtRehearsal()