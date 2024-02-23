import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}
export default ChildComponent;

