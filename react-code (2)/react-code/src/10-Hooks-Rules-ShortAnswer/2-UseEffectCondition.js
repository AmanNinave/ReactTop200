import React, { useState, useEffect } from "react";

const UseEffectCondition = () => {
  const [shouldRunEffect, setShouldRunEffect] = useState(true);

  useEffect(() => {
    // Conditionally run the effect
    if (shouldRunEffect) {
      // Your effect code here
      console.log("Effect ran!");
    }
  }, [shouldRunEffect]); // Include any dependencies if needed

  return (
    <div>
      <p>Conditionally Run Effect Example</p>
      <button onClick={() => setShouldRunEffect(!shouldRunEffect)}>
        Toggle Effect
      </button>
    </div>
  );
};
export default UseEffectCondition;

