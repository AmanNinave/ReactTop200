import React, { Component } from 'react';

class AppLifeCycleMethods extends Component {
  componentDidMount() {
    console.log('Component is now mounted!');
    // You can perform actions like data fetching here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated!');
    // You can compare previous props/state with current props/state
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
    // Cleanup tasks can be performed here
  }

  render() {
    return <p>Hello me, {this.props.name}!</p>;
  }
}

export default AppLifeCycleMethods;
