import {useEffect, useState} from "react";

const CounterEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Changed count to " + count);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    </div>
  );
};

export default CounterEffect;
