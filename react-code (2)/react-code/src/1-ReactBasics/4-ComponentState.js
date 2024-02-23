import React from "react";

// Stateless Example
function ComponentState() {
  let count = 0; // Initial state

  const increment = () => {
    count += 1; // State updated
    console.log(`Count: ${count}`);
  };

  return (
    <div>
      <p>Stateless Example</p>
      <p>Count: {count}</p> {/* Not updating */}    
      <button onClick={increment}>Click</button>
    </div>
  );
}
export default ComponentState;



