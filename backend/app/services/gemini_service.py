import os
from pathlib import Path
import google.generativeai as genai
from dotenv import load_dotenv

# Locate the project root
BASE_DIR = Path(__file__).resolve().parents[3]
ENV_PATH = BASE_DIR / ".env"

print("Looking for .env at:", ENV_PATH)

load_dotenv(dotenv_path=ENV_PATH)

API_KEY = os.getenv("GEMINI_API_KEY")
print("API_KEY =", API_KEY)

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(prompt: str):
    response = model.generate_content(prompt)
    return response.text

def settlement_recommendation(data):
    prompt = f"""
You are an expert financial advisor.

Analyze the customer's financial details and provide professional advice.

Customer Details:
-----------------
Monthly Income: ₹{data.income}
Monthly Expenses: ₹{data.expenses}
Loan Amount: ₹{data.loan_amount}
Interest Rate: {data.interest_rate}%
Loan Type: {data.loan_type}

Provide the following:

1. Financial Summary
2. Debt Settlement Recommendation
3. Best Repayment Strategy
4. Monthly Budget Suggestions
5. Risk Level (Low/Medium/High)
6. Final Recommendation

Keep the response clear and professional.
"""

    response = model.generate_content(prompt)
    return response.text    

def generate_negotiation_letter(data):

    prompt = f"""
You are an expert financial advisor.

Write a professional debt settlement negotiation letter.

Customer Name: {data.borrower_name}

Bank Name: {data.bank_name}

Outstanding Loan Amount: ₹{data.loan_amount}

Reason:
{data.reason}

The letter should include:

1. Proper greeting

2. Explain the customer's financial situation

3. Politely request a settlement or revised repayment plan

4. Express willingness to cooperate

5. Professional closing

Return only the letter.
"""

    response = model.generate_content(prompt)

    return response.text    

def financial_analysis(data):
    prompt = f"""
You are a certified financial advisor.

Analyze the following financial details and provide:

1. Overall financial health
2. Debt-to-income assessment
3. Savings analysis
4. EMI affordability
5. Risk level
6. Suggestions to improve financial health

Monthly Income: ₹{data.income}
Monthly Expenses: ₹{data.expenses}
Monthly Savings: ₹{data.savings}
Loan Amount: ₹{data.loan_amount}
Monthly EMI: ₹{data.monthly_emi}
"""

    response = model.generate_content(prompt)

    return response.text