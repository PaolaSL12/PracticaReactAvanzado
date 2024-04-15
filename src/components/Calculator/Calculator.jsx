import React, { useReducer, useState } from "react";
import Button from "../Button/Button";
import { INITIAL_STATE, calculatorReducer } from "../../utils/reducer";

const Calculator = React.memo(() => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);
  const [inputValue, setInputValue] = useState("");

  console.log("calculator");
  const setInput = (operation) => {
    dispatch({ type: "SET_NUM1", payload: parseInt(inputValue) });
    setInputValue("");
    dispatch({ type: operation });
  };

  const setResult = () => {
    dispatch({ type: "SET_NUM2", payload: parseInt(inputValue) });
    setInputValue("");
    dispatch({ type: "LAST_RESULT" });
  };

  const allResults = () => {
    dispatch({ type: "RESULTS" });
  };

  const orderResults = state.results.slice().sort((a, b) => a - b);

  return (
    <div className="claculator">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="divButtons">
        <Button text={"+"} action={() => setInput("SUMAR")} />
        <Button text={"-"} action={() => setInput("RESTAR")} />
        <Button text={"x"} action={() => setInput("MULTIPLICAR")} />
        <Button text={"/"} action={() => setInput("DIVIDIR")}/>
        <Button text={"%"} action={() => setInput("PORCENTAJE")}/>
        <Button
          text={"="}
          action={() => {
            {
              setResult(), allResults();
            }
          }}
        />
      </div>
      <p>Último resultado: {state.lastResult}</p>
      <div>
        <p>Resultados historicos:</p>
        <ul>
          {orderResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Calculator;
