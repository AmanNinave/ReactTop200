import React from "react";

function App() {
  const props = { name: "Happy", purpose: "Interview" };

  return (
    <>
      <ChildComponent {...props} />
    </>
  );
}

function ChildComponent(props) {
  return (
    <div>
      {props.name}, {props.purpose}
    </div>
  );
}
