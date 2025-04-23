import {useReducer, useState} from "react";
import {counterReducer, initialState} from "./CounterReducer.jsx";


const Counter = () => {


  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({type: "INCREMENT"});
  const handleDecrement = () => dispatch({type: "DECREMENT"});
  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(0);
  };


  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input type="number"
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}/>
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Sub</button>

      </div>

    </div>
  );
};

export default Counter;