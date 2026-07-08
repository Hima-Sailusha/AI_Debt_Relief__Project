from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.database.database import Base, engine
from backend.app.models.loan import Loan
from backend.app.models.user import User

from backend.app.routers.loan import router as loan_router
from backend.app.routers.user import router as user_router
from backend.app.routers.ai import router as ai_router

# Create FastAPI app FIRST
app = FastAPI(
    title="AI Powered Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Temporary CORS (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(user_router)
app.include_router(loan_router)
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