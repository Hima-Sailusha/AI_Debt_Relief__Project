import { useState } from "react";
import api from "../services/api";

function Settlement() {
  const [form, setForm] = useState({
    income: "",
    expenses: "",
    loan_amount: "",
    interest_rate: "",
    loan_type: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getRecommendation = async () => {
    try {
      const res = await api.post("/ai/settlement", form);

      setResponse(res.data.recommendation);
    } catch (err) {
      console.log(err);
      alert("Failed to get recommendation");
    }
  };

  return (
    <div className="container mt-5">

      <h2>AI Settlement Recommendation</h2>

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
        placeholder="Loan Amount"
        name="loan_amount"
        value={form.loan_amount}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Interest Rate"
        name="interest_rate"
        value={form.interest_rate}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Loan Type"
        name="loan_type"
        value={form.loan_type}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary"
        onClick={getRecommendation}
      >
        Get Recommendation
      </button>

      {response && (
        <div className="card mt-4 p-3">
          <h4>AI Recommendation</h4>
          <p>{response}</p>
        </div>
      )}

    </div>
  );
}

export default Settlement;