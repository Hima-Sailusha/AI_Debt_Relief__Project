import { useState } from "react";
import api from "../services/api";

function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!prompt.trim()) {
      alert("Please enter a question.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/ai/chat", {
        prompt: prompt,
      });

      setResponse(res.data.response);
    } catch (err) {
      console.log(err);
      alert("Failed to get AI response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <h2>🤖 AI Chat Assistant</h2>

      <textarea
        className="form-control mt-3"
        rows="5"
        placeholder="Ask anything about debt relief..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      <button
        className="btn btn-primary mt-3"
        onClick={askAI}
      >
        Ask AI
      </button>

      {loading && (
        <div className="mt-3">
          <strong>Loading...</strong>
        </div>
      )}

      {response && (
        <div className="card mt-4 p-3">
          <h4>AI Response</h4>
          <p>{response}</p>
        </div>
      )}

    </div>
  );
}

export default AIChat;