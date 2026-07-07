import { useState } from "react";
import api from "../services/api";

function FinancialAnalysis() {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    savings: "",
    loan_amount: "",
    monthly_emi: "",
  });

  const [analysis, setAnalysis] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const analyzeFinance = async () => {
    try {
      const res = await api.post("/ai/financial-analysis", form);

      setAnalysis(res.data.analysis);
    } catch (err) {
      console.log(err);
      alert("Failed to analyze financial health");
    }
  };

  return (
    <div className="container mt-5">

      <h2>Financial Health Analysis</h2>

      <input
        className="form-control mb-2"
        placeholder="Monthly Income"
        name="income"
        value={form.income}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Monthly Expenses"
        name="expenses"
        value={form.expenses}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Monthly Savings"
        name="savings"
        value={form.savings}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Total Loan Amount"
        name="loan_amount"
        value={form.loan_amount}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Monthly EMI"
        name="monthly_emi"
        value={form.monthly_emi}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary"
        onClick={analyzeFinance}
      >
        Analyze
      </button>

      {analysis && (
        <div className="card mt-4 p-3">
          <h4>AI Financial Analysis</h4>

          <pre style={{ whiteSpace: "pre-wrap" }}>
            {analysis}
          </pre>
        </div>
      )}

    </div>
  );
}

export default FinancialAnalysis;