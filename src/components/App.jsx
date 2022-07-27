import React, { Component } from 'react';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

 addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.addGood}>Good</button>
          <button onClick={this.addNeutral}>Neutral</button>
          <button onClick={this.addBad}>Bad</button>
        </div>

        <h2>Statistics</h2>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
      </>

    );
  }
}

export default App;
