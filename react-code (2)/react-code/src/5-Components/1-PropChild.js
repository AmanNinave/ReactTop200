import React from "react";
import PropGrandChild from "./1-PropGrandChild";

function PropChild({ message }) {
  return (
    <div>
      <PropGrandChild message={message} />
    </div>
  );
}
export default PropChild;
