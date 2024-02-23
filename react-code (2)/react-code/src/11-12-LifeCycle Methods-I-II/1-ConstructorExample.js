import React, { Component } from "react";

class ConstructorExample extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      count: 0,
    };
  }

  render() {
    return <h2>Count: {this.state.count}</h2>;
  }
}

export default ConstructorExample;
