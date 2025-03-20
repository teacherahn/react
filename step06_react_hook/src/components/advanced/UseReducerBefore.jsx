import { useState } from "react";

const UseReducerBefore = () => {
  
  const [count , setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  } 

  return (
    <div>
      <h3>✅useReducer before</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default UseReducerBefore;