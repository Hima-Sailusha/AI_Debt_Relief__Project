import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="container mt-4">

          <h2>Welcome 👋</h2>

          <div className="row mt-4">

            <div className="col-md-3">
              <div className="card shadow">

                <div className="card-body">

                  <h5>Total Loans</h5>

                  <h2>5</h2>

                </div>

              </div>
            </div>

            <div className="col-md-3">

              <div className="card shadow">

                <div className="card-body">

                  <h5>Outstanding</h5>

                  <h2>₹8,50,000</h2>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow">

                <div className="card-body">

                  <h5>Monthly EMI</h5>

                  <h2>₹15,000</h2>

                </div>

              </div>

            </div>

            <div className="col-md-3">

              <div className="card shadow">

                <div className="card-body">

                  <h5>Financial Health</h5>

                  <h2>Good</h2>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;