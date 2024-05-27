import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function convertToRoman(num) {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let result = "";

    romanNumerals.map(([letter, value]) => {
      while (num >= value) {
        result += letter;
        num -= value;
      }
    });

    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setOutput("Please enter a valid number");
      return;
    }
    const number = parseInt(input);

    if (number < 1) {
      setOutput("Please enter a number greater than or equal to 1");

      return;
    }

    if (number >= 4000) {
      setOutput("Please enter a number less than or equal to 3999");

      return;
    }

    setOutput(convertToRoman(number));
  };
  return (
    <div className="container">
      <h1>Roman Numeral Converter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="number"
          placeholder="Enter a number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="convert-btn">Convert</button>
      </form>
      <div id="output">{output}</div>
    </div>
  );
}

export default App;
