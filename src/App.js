import { useReducer } from "react";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const initialState = {
    num1 : 0,
    num2 : 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "incNum1":
        return {...state , num1: state.num1 + action.value };
      case "incNum2":
        return {...state , num2: state.num2 + action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  return <div className="App">
    <h2>{state.num1}</h2>
    <button onClick={()=>{dispatch({type:'incNum1' , value: 10})}}>Num1 +</button>
    <h2>{state.num2}</h2>
    <button onClick={()=>{dispatch({type:'incNum2' , value: 20})}}>Num2 +</button>
  </div>;
}

export default App;
