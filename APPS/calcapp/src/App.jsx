import React from "react";
import Result from "./Components/Result";
import MathOperations from './Components/MathOperations';
import Funciones from './Components/Funciones';
import Numbers from './Components/Numbers';
import "./Style/Calc.css";

function App() {

  return (
    <main className="react-calculator">
      <Result value = {undefined}/>
      <Numbers
        onClickNumber = {number => console.log("Num: "+ number)}
      />
      <Funciones 
        onDelete = {(elim) => console.log("delete: "+elim)}
        onContentClick = {cont => console.log("clear: "+cont)}
      />
      <MathOperations
        onClickOperation = {operation => console.log("operacion: "+operation)}
        onClickEqual = {equal => console.log("igual: "+equal)}
      />
    </main>
  );
}

export default App;
