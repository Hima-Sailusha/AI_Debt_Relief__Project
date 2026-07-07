import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/LoginTemp";
import Register from "./pages/RegisterTemp";
import Dashboard from "./pages/DashboardTemp";
import Loan from "./pages/LoanTemp";
import AIChat from "./pages/AIChatTemp";
import Settlement from "./pages/SettlementTemp";
import Letter from "./pages/LetterTemp";
import FinancialAnalysis from "./pages/AnalysisTemp";
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