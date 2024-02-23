import React from "react";

const UseCallbackChild = ({ onIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>
        Increment</button>
    </div>
  );
};

export default UseCallbackChild;

// const memoizedCallback = useCallback(callback, dependencies);