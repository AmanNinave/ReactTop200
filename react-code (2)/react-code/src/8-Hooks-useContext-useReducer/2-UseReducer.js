// useReducer for managing complex state
import React, { useReducer } from "react";

const UseReducer = () => {
  const i = { count: 0 }; // "i" is object
  const [state, dispatch] = useReducer(fnReducer, i);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Reducer function
const fnReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default UseReducer;

// Structure
//const [state, dispatch] = useReducer(reducer, initialState);

// const initialState = {
//   user: {
//     name: 'John',
//     age: 30,
//   },
//   isLoggedIn: false,
// };
// const [state, dispatch] = useReducer(reducer, initialState);