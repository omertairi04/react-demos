import {useState, useEffect, createContext, useReducer} from "react";
import Counter from "./components/Counter.jsx";

const initState = {count: 0};

const App = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {...state, count: state.count + 1};
      case "decrement":
        return {...state, count: state.count - 1};
      case "reset":
        return {...state, count: 0};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return <div>
    {/*<button onClick={() => dispatch({type: "increment"})}>+</button>*/}
    {/*<button onClick={() => dispatch({type: "decrement"})}>-</button>*/}
    {/*<button onClick={() => dispatch({type: "reset"})}>reset</button>*/}

    {/*<h1>Count: {state.count}</h1>*/}
    <Counter/>
  </div>;
};

export default App;
