import React, { useState } from "react";

const Controlled = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Event handler for input changes
  const handleInputChange = (e) => {
    // Update the state with the new input value
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* Input controlled by the state*/}
      <input type="text" value={inputValue}
        onChange={handleInputChange} placeholder="Type..."/>

      {/* Display the current state value */}
      <p>You typed: {inputValue}</p>
    </div>
  );
};
export default Controlled;

