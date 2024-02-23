import React, { useState, useCallback } from "react";
import UseCallbackChild from "./1-UseCallbackChild";

const UseCallbackParent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // With useCallback
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the memoized callback to the ChildComponent */}
      <UseCallbackChild onIncrement={handleIncrement} />
    </div>
  );
};

export default UseCallbackParent;
