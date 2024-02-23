import React from "react";

const ChildComponent = ({ fromChild }) => {
  // No local state in the child component
  const dataToParent = () => {
    // Directly pass the input value to the parent
    fromChild(document.getElementById
        ("inputField").value);
  };

  return (
    <div>
      <input type="text" id="inputField" />
      <button onClick={dataToParent}>Send</button>
    </div>
  );
};
export default ChildComponent;

