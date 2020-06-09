import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("Counter - construtor");
  }

  componentDidMount() {
    this.setState((state) => ({ counter: this.state.counter + 10 }));
    console.log("Counter - componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter - shouldComponentUpdate", this.state, nextState);
    if (nextState.counter >= 13 && nextState.counter <= 15) return false;
    return true;
  }

  componentDidUpdate(prevPros, prevState) {
    console.log("Counter - componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("Counter - render");
    return (
      <div>
        <p>Contador (Counter)</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
