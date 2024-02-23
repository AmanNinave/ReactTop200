
import React, { useRef } from "react";

const UseRef = () => {
  // Create a ref to hold a reference to the element
  const inputRef = useRef();

  // Function to focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />

      {/* Button click will focus on input element */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default UseRef;

