import React, { Component } from "react";

// pseudocode: componentWillUnmount
class MyComponent extends Component {
  constructor(props) {
    // Intialize component...
  }

  componentDidMount() {
    // Add event listner
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    // 1. Clean up operations
    document.removeEventListener("click", this.handleClick);

    // 2. Unsubscribe or close connections
    externalService.unsubscribe(this.subscription);
  }
}

// ...
