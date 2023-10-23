import React from "react";
import "./styles.css";

export default class App extends React.Component {
  // state = {
  //   counter: 0
  // };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleClickCounter = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3>Counter:{this.state.counter}</h3>
        <button onClick={this.handleClickCounter}>Increment Counter</button>
      </div>
    );
  }
}

// export default App;
