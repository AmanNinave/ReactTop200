import React, { useRef } from "react";

const Uncontrolled = () => {
  // Create a ref to access the input value
  const inputRef = useRef(null);

  const handleClick = () => {
    // Access the input value directly using ref
    const value = inputRef.current.value;
    alert(`You typed: ${value}`);
  };

  return (
    <div>
      {/* Uncontrolled input with ref */}
      <input type="text" ref={inputRef} 
      placeholder="Type something..." />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};
export default Uncontrolled;

