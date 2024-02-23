import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    const dataToSend = "Hello from Parent!";
    
    return (
      <div>
        <ChildComponent message={dataToSend} />
      </div>
    );
  }
}
export default ParentComponent;

