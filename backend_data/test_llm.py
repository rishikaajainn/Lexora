from src.llm import LegalLLM

llm = LegalLLM().get_llm()

response = llm.invoke("Say hello in one sentence.")

print(response.content)