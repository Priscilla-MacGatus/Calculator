import React, { useState } from "react";
import "./Calc.css";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState(null);

  const appendNumber = (number) => {
    setCurrentInput((prevInput) => prevInput + number);
  };

  const handleOperator = (op) => {
    if (firstValue === null) {
      setFirstValue(parseFloat(currentInput));
    }
    setOperator(op);
    setCurrentInput("");
  };

  const calculate = () => {
    if (operator && currentInput !== "") {
      const secondValue = parseFloat(currentInput);
      let result;
      switch (operator) {
        case "+":
          result = firstValue + secondValue;
          break;
        case "-":
          result = firstValue - secondValue;
          break;
        case "*":
          result = firstValue * secondValue;
          break;
        case "/":
          result = firstValue / secondValue;
          break;
        default:
          return;
      }
      setCurrentInput(result.toString());
      setFirstValue(null);
      setOperator("");
    }
  };

  const clearDisplay = () => {
    setFirstValue(null);
    setOperator("");
    setCurrentInput("");
  };

  return (
    <div className="calculator">
      <input
        type="text"
        id="display"
        className="display"
        value={currentInput}
        disabled
      />
      <div className="buttons">
        <button className="btn" onClick={() => appendNumber(7)}>
          7
        </button>
        <button className="btn" onClick={() => appendNumber(8)}>
          8
        </button>
        <button className="btn" onClick={() => appendNumber(9)}>
          9
        </button>
        <button className="btn operator" onClick={() => handleOperator("/")}>
          /
        </button>

        <button className="btn" onClick={() => appendNumber(4)}>
          4
        </button>
        <button className="btn" onClick={() => appendNumber(5)}>
          5
        </button>

        <button className="btn" onClick={() => appendNumber(6)}>
          6
        </button>
        <button className="btn operator" onClick={() => handleOperator("*")}>
          x
        </button>

        <button className="btn" onClick={() => appendNumber(1)}>
          1
        </button>
        <button className="btn" onClick={() => appendNumber(2)}>
          2
        </button>
        <button className="btn" onClick={() => appendNumber(3)}>
          3
        </button>
        <button className="btn operator" onClick={() => handleOperator("-")}>
          -
        </button>

        <button className="btn" onClick={() => appendNumber(0)}>
          0
        </button>
        <button className="btn" onClick={clearDisplay}>
          C
        </button>
        <button className="btn operator" onClick={calculate}>
          =
        </button>
        <button className="btn operator" onClick={() => handleOperator("+")}>
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
