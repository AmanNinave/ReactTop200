import React, { useContext } from "react";
import MyContext from "./1-UseContext";

const Child = () => {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
  // return (
  //   <MyContext.Consumer>
  //     {(contextValue) => <div>{contextValue}</div>}
  //   </MyContext.Consumer>
  // );
};
export default Child;
