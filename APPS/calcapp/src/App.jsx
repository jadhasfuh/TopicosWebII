import React from "react";
import Result from "./Components/Result";
import Button from "./Components/Button";

import "./Style/Calc.css";

function App() {
  const clickHandlerFunctions = (text) => {
    console.log(text);
  }
  return (
    <main className="react-calculator">
      <Result value = {undefined}/>
      <div className="numbers">
        <Button text = {1} clickHandler = {clickHandlerFunctions}/>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>C</button>
        <button>R</button>
      </div>
      <div className="math-operatios">
        <button>-</button>
        <button>+</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </main>
  );
}

export default App;
