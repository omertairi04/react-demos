import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementBtn = () => {
    setCount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={incrementBtn}>Increment</button>
  </div>
}

export default Counter;