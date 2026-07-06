import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite:///./database/debt_relief.db"
)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
SECRET_KEY = "your_secret_key_change_this"
ALGORITHM = "HS256"