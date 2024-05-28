import React, { useState } from "react";
import "./App.css";

function validatePhoneNumber(phone) {
  const validPatterns = [
    /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,
    /^\d{10}$/,
    /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    /^\(\d{3}\)\d{3}[-\s]?\d{4}$/,
    /^1?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
  ];

  for (const pattern of validPatterns) {
    if (pattern.test(phone)) {
      return true;
    }
  }
  return false;
}

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please provide a phone number");
      return;
    }
    const validNumber = validatePhoneNumber(input);
    setResult(
      validNumber ? `Valid US number: ${input}` : `Invalid US number: ${input}`
    );
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="container">
      <h1>Telephone Number Validator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="user-input"
          placeholder="Enter a phone number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" id="check-btn">
          Check
        </button>
        <button id="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </form>
      <div id="results-div">{result}</div>
    </div>
  );
}

export default App;
