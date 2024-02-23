import React from "react";
import MyContext from "./1-UseContext";
import Child from "./1-Child";

const Parent = () => {
  const contextValue = "Hello from Context!";

  return (
    <MyContext.Provider value={contextValue}>
      {/* Your component tree */}
      <Child></Child>
    </MyContext.Provider>
  );
};
export default Parent;
