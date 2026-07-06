import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      const response = await api.post("/users/login", form);

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.detail || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">

      <h2>Login</h2>

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

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;