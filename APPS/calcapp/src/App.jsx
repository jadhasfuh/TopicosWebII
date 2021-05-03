/* eslint no-eval:0 */

import React, { useState } from "react";
import Result from "./Components/Result";
import MathOperations from "./Components/MathOperations";
import Funciones from "./Components/Funciones";
import Numbers from "./Components/Numbers";
import "./Style/Calc.css";
import words from 'lodash.words';

function App() {
  //useState nos retorna un arreglo de dos valores
  //1~El valor de la variable que va a adquirir el estado
  //2-La funcion que permite el cambio el valor de la variable del estado

  /*  1RA OPCION
  const arrayTextoFuncionModificaTexto = useState("");
  const texto = arrayTextoFuncionModificaTexto[0];
  const funcionModificaTexto = arrayTextoFuncionModificaTexto[1];
  */

  // 2DA OPCION
  const [stack, setStack] = useState("");

  const items = words(stack,/[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length-1] : 0;

  return (
    <main className="react-calculator">
      <Result value={value.toString()} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Num: " + number);
          setStack(`${stack}${number}`);
        }}
      />
      <Funciones
        onDelete={
          () => {
            if(stack.length > 0){
              console.log("Retroceso");
              setStack(stack.substring(0,stack.length-1));
            }
          }
        }
          onContentClick={
          (cont) => {
            console.log("clear: " + cont);
            setStack("");
          }
        }
      />
      <MathOperations
        onClickOperation={
          (operation) => {
            console.log("operacion: " + operation)
            setStack(`${stack}${operation}`);
          }
        }
        onClickEqual={
          (equal) => {
            console.log("igual: " + equal)
            setStack(eval(stack).toString());
          }
        }
        />
    </main>
  );
}

export default App;
