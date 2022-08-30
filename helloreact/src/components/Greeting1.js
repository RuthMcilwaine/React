import React, { Component } from 'react';
//class component
export default class Greeting1 extends Component {
  render() {
    return <div>Hello from {this.props.firstName} Component</div>;
  }
}
