import React, { Component } from 'react';

export default class ClickComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    //this.Clickhandler = this.Clickhandler;
  }
  Clickhandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  ClickHandler() {
    console.log(this);
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.ClickHandler.bind(this)}>
        Increment the count
      </button> */}
        <button onClick={this.Clickhandler}>Increment the count</button>
      </>
    );
  }
}
