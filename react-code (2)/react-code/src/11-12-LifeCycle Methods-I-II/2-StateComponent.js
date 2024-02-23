import React, { Component } from "react";

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initializing the state
    };
  }
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleInc}>Inc</button>
      </div>
    );
  }

  handleInc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
}
export default StateComponent;


