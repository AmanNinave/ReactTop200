
import React, { useState } from "react";

function UseState() {
  // array destructuring 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(`Count: ${count + 1}`);
  };

  return (
    <div>
      <p>Stateful Example</p>
      <p>Count: {count}</p> {/* Updating */}
      <button onClick={increment}>Click</button>
    </div>
  );
}
export default UseState;

// state is the current state value.
// setState is a function that used to update the state.
//const [state, setState] = useState(initialValue);

//const [stateVariable, stateUpdaterFunction] = useState(initialState);






