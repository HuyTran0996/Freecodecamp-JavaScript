import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      alert("Please input a value");
      return;
    }
    const cleanedInput = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    const isPalindrome = cleanedInput === reversedInput;

    if (isPalindrome) {
      setResult(`${value} is a palindrome`);
    } else {
      setResult(`${value} is not a palindrome`);
    }
    return;
  };

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text-input"
          placeholder="Enter text here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" id="check-btn">
          Check
        </button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default App;
