# AI Powered Debt Relief & Financial Recovery Platform

## Overview

The AI Powered Debt Relief & Financial Recovery Platform is a web application that helps users manage their loans and receive AI-powered financial guidance.

The platform allows users to:

- Register and Login securely
- Manage multiple loans
- Get AI-based debt settlement recommendations
- Generate negotiation letters using Google Gemini AI
- Analyze financial health
- View loan information through a modern dashboard

---

## Features

### User Authentication
- User Registration
- JWT Login
- Password Hashing
- Protected Routes

### Loan Management
- Add Loan
- View Loans
- Update Loan
- Delete Loan

### AI Features
- AI Chat Assistant
- Debt Settlement Recommendation
- AI Negotiation Letter Generator
- Financial Health Analysis

### Dashboard
- Modern React UI
- Responsive Design
- Statistics
- Charts

---

## Tech Stack

### Frontend
- React
- Vite
- Bootstrap
- Axios
- React Router

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Google Gemini API

---

## Project Structure

```
AI_Debt_Relief_Project
│
├── backend
├── frontend
├── database
├── docs
├── screenshots
├── requirements.txt
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/sailusha-dev/AI_Debt_Relief_Project.git
```

Go to the project

```bash
cd AI_Debt_Relief_Project
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn backend.app.main:app --reload
```

Run frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Future Enhancements

- Loan EMI Calculator
- Credit Score Prediction
- Email Notifications
- PDF Report Generation
- Cloud Database Integration

---

## Author

**Hima Sailusha**

Computer Science Engineering Student

GitHub:
https://github.com/sailusha-dev

Last Updated: July 2026