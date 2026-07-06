from fastapi import FastAPI

from backend.app.database.database import Base, engine
from backend.app.models.loan import Loan
from backend.app.models.user import User

from backend.app.routers.loan import router as loan_router
from backend.app.routers.user import router as user_router
from backend.app.routers.ai import router as ai_router
from fastapi.middleware.cors import CORSMiddleware

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="AI Powered Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(loan_router)
app.include_router(user_router)
app.include_router(ai_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Powered Debt Relief & Financial Recovery Platform"
    }

@app.get("/health")
def health():
    return {
        "status": "Server is running successfully"
    }