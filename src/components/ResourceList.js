import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
  state = { resource: [] };

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resource: response.data });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resource: response.data });
    }
  }

  render() {
    return <div>{this.state.resource.length}</div>;
  }
}

export default ResourceList;
