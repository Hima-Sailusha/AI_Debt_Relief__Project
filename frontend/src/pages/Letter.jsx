import { useState } from "react";
import api from "../services/api";

function Letter() {
  const [form, setForm] = useState({
    borrower_name: "",
    bank_name: "",
    loan_amount: "",
    reason: "",
  });

  const [letter, setLetter] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const generateLetter = async () => {
    try {
      const res = await api.post("/ai/letter", form);
      setLetter(res.data.letter);
    } catch (err) {
      console.log(err);
      alert("Failed to generate letter");
    }
  };

  return (
    <div className="container mt-5">
      <h2>AI Negotiation Letter Generator</h2>

      <input
        className="form-control mb-2"
        placeholder="Borrower Name"
        name="borrower_name"
        value={form.borrower_name}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Bank Name"
        name="bank_name"
        value={form.bank_name}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Loan Amount"
        name="loan_amount"
        value={form.loan_amount}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Reason for Settlement"
        name="reason"
        value={form.reason}
        onChange={handleChange}
      />

      <button
        className="btn btn-primary"
        onClick={generateLetter}
      >
        Generate Letter
      </button>

      {letter && (
        <div className="card mt-4 p-3">
          <h4>Generated Letter</h4>

          <pre style={{ whiteSpace: "pre-wrap" }}>
            {letter}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Letter;