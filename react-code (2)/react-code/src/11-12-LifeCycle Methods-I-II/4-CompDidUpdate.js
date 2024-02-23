import React, { Component } from "react";

class CompDidUpdate extends Component {
  constructor(props) {
    this.state = { data: null,};
  }
  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ data: data });
    });
  }

  componentDidUpdate(prevProps) {
    // Fetch new data if userId property changes
    if (this.props.userId !== prevProps.userId) {
      fetchData().then((data) => {
        this.setState({ data: data });
      });
    }
  }
  render() {
    return <div>Data: {this.state.data}</div>;
  }
}
export default CompDidUpdate;


