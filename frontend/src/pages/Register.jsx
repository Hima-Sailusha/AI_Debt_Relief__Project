import { useState } from "react";
import api from "../services/api";

function Register() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    try {
      await api.post("/users/", form);
      alert("Registration Successful");
    } catch (err) {
      alert(err.response?.data?.detail || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input
        className="form-control mb-3"
        placeholder="Full Name"
        name="full_name"
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={register}>
        Register
      </button>
    </div>
  );
}

export default Register;