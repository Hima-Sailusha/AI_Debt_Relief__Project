function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand">
        AI Debt Relief Platform
      </span>

      <button
        className="btn btn-light"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;