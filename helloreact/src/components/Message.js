import React, { Component } from 'react';
//we can't change the value of the property
export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Monkeys are cute',
    };
  }

  ChangeMessage = () => {
    //accepting an object
    this.setState({
      message: 'Donkeys are cute',
    });
  };

  //returns error. we can't change the value of the property in class component
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ChangeMessage}>Change Message</button>
      </div>
    );
  }
}
