import React, { Component } from "react";

class EventHandle extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      inputValue: "",
    };

    // Bind event handler methods to the instance
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler method for click event
  handleClick() {
    console.log("Button clicked!");
  }

  render() {
    return (
      <div>
        <h1>{this.state.inputValue}</h1>
        <button onClick={this.handleClick}>Click me</button>
        <input type="text"/>
      </div>
    );
  }
}

export default EventHandle;
