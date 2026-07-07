import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import AIChat from "./pages/AIChat";
import Settlement from "./pages/Settlement";
import Letter from "./pages/Letter";
import FinancialAnalysis from "./pages/Analysis";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="/loans" element={<Loan />} />

        <Route path="/aichat" element={<AIChat />} />
        <Route path="/settlement" element={<Settlement />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/analysis" element={<FinancialAnalysis />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;