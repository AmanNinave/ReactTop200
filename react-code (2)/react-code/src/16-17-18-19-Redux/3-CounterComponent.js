// 1. Import Statements
import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./1-actions";

// 2. Functional Component
const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// 3. Map Redux actions to component props
const mapDispatchToProps = {
  increment,
  decrement,
};

// CounterComponent.js
// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    count: state.counter.count, 
  };
};

// 5. Connect the component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
