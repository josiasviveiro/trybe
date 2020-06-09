import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterDisplay from './CounterDisplay';

// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // console.log("App-CounterDisplay - componentDidMount");
  }

  render() {
    return (
      <div className="App App-header">
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />

        <Counter />
      </div>
    );
  }
}

export default App;
