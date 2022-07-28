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

  countTotalFeedback = () => {
    const totalSum = this.state.good + this.state.neutral + this.state.bad;
    return totalSum;
  }

  countPositiveFeedbackPercentage = (item) => {
    let positive = 0;
    if (item !== 0) {
      positive = this.state.good/(item/100);
    }
    return Math.round(positive);
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total  = this.countTotalFeedback();
    const posit = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button className='feed' onClick={this.addGood}>Good</button>
          <button className='feed' onClick={this.addNeutral}>Neutral</button>
          <button className='feed feed--last' onClick={this.addBad}>Bad</button>
        </div>

        <h2>Statistics</h2>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <p>Total: <span>{total}</span></p>
        <p>Positive feedback: <span>{posit}%</span></p>
      </>

    );
  }
}

export default App;
