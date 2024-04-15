export const INITIAL_STATE = {
  num1: 0,
  num2: 0,
  lastResult: 0,
  results: [],
  operation: "",
};

export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.payload };
    case "SET_NUM2":
      return { ...state, num2: action.payload };
    case "SUMAR":
      return { ...state, operation: "+" };
    case "RESTAR":
      return { ...state, operation: "-" };
    case "MULTIPLICAR":
      return { ...state, operation: "x" };
    case "DIVIDIR":
      return { ...state, operation: "/" };
    case "PORCENTAJE":
      return { ...state, operation: "%" };
    case "LAST_RESULT":
      let result;
      switch (state.operation) {
        case "+":
          result = state.num1 + state.num2;
          break;
        case "-":
          result = state.num1 - state.num2;
          break;
        case "x":
          result = state.num1 * state.num2;
          break;
        case "/":
          result = state.num1 / state.num2;
          break;
        case "%":
          result = state.num1 * (state.num2 / 100) ;
          break;
        default:
          result = 0;
      }
      return { ...state, lastResult: result };
    case "RESULTS":
      return { ...state, results: [...state.results, state.lastResult] };
    default:
      return state;
  }
};
