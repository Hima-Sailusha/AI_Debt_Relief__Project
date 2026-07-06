from pydantic import BaseModel

class SettlementRequest(BaseModel):
    income: float
    expenses: float
    loan_amount: float
    interest_rate: float
    loan_type: str

from pydantic import BaseModel

class LetterRequest(BaseModel):
    borrower_name: str
    bank_name: str
    loan_amount: float
    reason: str

class FinancialAnalysisRequest(BaseModel):
    income: float
    expenses: float
    savings: float
    loan_amount: float
    monthly_emi: float 