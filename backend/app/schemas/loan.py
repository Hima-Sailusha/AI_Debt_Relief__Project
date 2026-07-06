from pydantic import BaseModel


class LoanCreate(BaseModel):
    borrower_name: str
    loan_type: str
    outstanding_amount: float
    emi: float
    overdue_months: int
    monthly_income: float


class LoanResponse(LoanCreate):
    id: int

    class Config:
        from_attributes = True