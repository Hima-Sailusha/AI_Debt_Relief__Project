from fastapi import APIRouter
from pydantic import BaseModel

from backend.app.services.gemini_service import ask_gemini
from backend.app.schemas.ai import SettlementRequest
from backend.app.services.gemini_service import settlement_recommendation
from backend.app.schemas.ai import LetterRequest
from backend.app.services.gemini_service import generate_negotiation_letter
from backend.app.schemas.ai import SettlementRequest, LetterRequest
from backend.app.schemas.ai import FinancialAnalysisRequest
from backend.app.services.gemini_service import financial_analysis
from backend.app.schemas.ai import (
    SettlementRequest,
    LetterRequest,
    FinancialAnalysisRequest
)

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

class PromptRequest(BaseModel):
    prompt: str

@router.post("/chat")
def chat(request: PromptRequest):
    response = ask_gemini(request.prompt)

    return {
        "response": response
    }

@router.post("/settlement")
def settlement(data: SettlementRequest):

    result = settlement_recommendation(data)

    return {
        "recommendation": result
    }    

@router.post("/letter")
def generate_letter(data: LetterRequest):

    letter = generate_negotiation_letter(data)

    return {
        "letter": letter
    }    

@router.post("/financial-analysis")
def analyze_finance(data: FinancialAnalysisRequest):
    analysis = financial_analysis(data)

    return {
        "analysis": analysis
    }