import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h4>Dashboard</h4>

      <hr />

      <Link className="text-white d-block mb-3" to="/dashboard">
        Dashboard
      </Link>

      <Link to="/loans" className="text-white d-block mb-3">
    Loans
</Link>

      <Link className="text-white d-block mb-3" to="/aichat">
  AI Chat
</Link>

      <Link className="text-white d-block mb-3" to="/settlement">
  Settlement
</Link>

      <Link className="text-white d-block mb-3" to="/letter">
  Letter
</Link>

      <Link className="text-white d-block mb-3 text-decoration-none" to="/analysis">
        📈 Financial Analysis
      </Link>
    </div>
  );
}

export default Sidebar;