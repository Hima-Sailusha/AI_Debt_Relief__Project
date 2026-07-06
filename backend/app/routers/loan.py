from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.app.database.database import get_db
from backend.app.models.loan import Loan
from backend.app.schemas.loan import LoanCreate, LoanResponse

from backend.app.utils.auth import verify_token

router = APIRouter()


# 🔒 Get all loans (PROTECTED)
@router.get("/loans/", response_model=list[LoanResponse])
def get_loans(
    db: Session = Depends(get_db),
    user: str = Depends(verify_token)
):
    return db.query(Loan).all()


# 🔒 Get loan by ID (PROTECTED)
@router.get("/loans/{loan_id}", response_model=LoanResponse)
def get_loan(
    loan_id: int,
    db: Session = Depends(get_db),
    user: str = Depends(verify_token)
):
    loan = db.query(Loan).filter(Loan.id == loan_id).first()

    if not loan:
        raise HTTPException(status_code=404, detail="Loan not found")

    return loan


# 🔒 Create loan (PROTECTED)
@router.post("/loans/", response_model=LoanResponse)
def create_loan(
    loan: LoanCreate,
    db: Session = Depends(get_db),
    user: str = Depends(verify_token)
):
    new_loan = Loan(**loan.dict())

    db.add(new_loan)
    db.commit()
    db.refresh(new_loan)

    return new_loan


# 🔒 Update loan (PROTECTED)
@router.put("/loans/{loan_id}", response_model=LoanResponse)
def update_loan(
    loan_id: int,
    loan: LoanCreate,
    db: Session = Depends(get_db),
    user: str = Depends(verify_token)
):
    db_loan = db.query(Loan).filter(Loan.id == loan_id).first()

    if not db_loan:
        raise HTTPException(status_code=404, detail="Loan not found")

    db_loan.amount = loan.amount
    db_loan.interest_rate = loan.interest_rate
    db_loan.tenure = loan.tenure

    db.commit()
    db.refresh(db_loan)

    return db_loan


# 🔒 Delete loan (PROTECTED)
@router.delete("/loans/{loan_id}")
def delete_loan(
    loan_id: int,
    db: Session = Depends(get_db),
    user: str = Depends(verify_token)
):
    loan = db.query(Loan).filter(Loan.id == loan_id).first()

    if not loan:
        raise HTTPException(status_code=404, detail="Loan not found")

    db.delete(loan)
    db.commit()

    return {"message": "Loan deleted successfully"}

from fastapi import Depends, HTTPException, Header

def verify_token(authorization: str = Header(...)):
    token = authorization.replace("Bearer ", "")    