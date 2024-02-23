import React from "react";
import useCustomHook from "./3-useCustomHooks";

const UseCustomHookUse = () => {
  const { count, increment, decrement } = useCustomHook();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default UseCustomHookUse;


