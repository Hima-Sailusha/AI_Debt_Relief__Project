from fastapi import FastAPI

app = FastAPI(
    title="AI Powered Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

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

@app.get("/database")
def database():
    return {
        "message": "SQLite Database Configured Successfully"
    }