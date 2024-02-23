import React, { Component } from "react";

// pseudocode: Fetch data from API using  
// componentDidMount life cycle method
class CompDidMount extends Component {
  constructor(props) {
    // 1. Component intialization
    this.state = {
      data: null
    };
  }

  // 2. componentDidMount is called after
  // the component is added to the DOM
  componentDidMount() {
    // 3. Fetch data from an API and 
    // update state with fetch data
    fetchData().then((data) => {      
      this.setState({
        data: data
      });
    });
  }

  // 4. Render the component's UI using 
  // the fetched data
  render() {   
    return (
      <div>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}
export default CompDidMount;

