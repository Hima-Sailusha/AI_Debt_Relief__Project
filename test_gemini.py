from backend.app.services.gemini_service import ask_gemini

answer = ask_gemini("What is debt settlement?")

print(answer)