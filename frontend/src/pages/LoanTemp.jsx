import { useEffect, useState } from "react";
import api from "../services/api";

function Loan() {
  const [loans, setLoans] = useState([]);

  const [form, setForm] = useState({
    borrower_name: "",
    loan_type: "",
    outstanding_amount: "",
    emi: "",
    overdue_months: "",
    monthly_income: "",
  });

  const fetchLoans = async () => {
    try {
      const response = await api.get("/loans/");
      setLoans(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addLoan = async () => {
    try {
      await api.post("/loans/", form);

      alert("Loan Added Successfully");

      setForm({
        borrower_name: "",
        loan_type: "",
        outstanding_amount: "",
        emi: "",
        overdue_months: "",
        monthly_income: "",
      });

      fetchLoans();
    } catch (err) {
      console.log(err);
      alert("Failed to Add Loan");
    }
  };

  return (
    <div className="container mt-5">

      <h2>Loan Management</h2>

      <div className="card p-4 mb-4">

        <h4>Add Loan</h4>

        <input
          className="form-control mb-2"
          placeholder="Borrower Name"
          name="borrower_name"
          value={form.borrower_name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Loan Type"
          name="loan_type"
          value={form.loan_type}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Outstanding Amount"
          name="outstanding_amount"
          value={form.outstanding_amount}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Monthly EMI"
          name="emi"
          value={form.emi}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Overdue Months"
          name="overdue_months"
          value={form.overdue_months}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Monthly Income"
          name="monthly_income"
          value={form.monthly_income}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={addLoan}
        >
          Add Loan
        </button>

      </div>

      <h4>Loan List</h4>

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>ID</th>
            <th>Borrower</th>
            <th>Loan Type</th>
            <th>Outstanding</th>
            <th>EMI</th>
            <th>Overdue</th>
            <th>Income</th>
          </tr>
        </thead>

        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.borrower_name}</td>
              <td>{loan.loan_type}</td>
              <td>{loan.outstanding_amount}</td>
              <td>{loan.emi}</td>
              <td>{loan.overdue_months}</td>
              <td>{loan.monthly_income}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Loan;