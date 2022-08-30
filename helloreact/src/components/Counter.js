import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  IncrementCount = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('Callback', this.state.count);
    //   }
    // );
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));

    console.log(this.state.count);
  };

  IncrementCountBy5 = () => {
    this.setState((previousState) => ({
      count: previousState.count + 5,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.IncrementCount}>Increment</button>
        <button onClick={this.IncrementCountBy5}>Increment by 5</button>
      </>
    );
  }
}
