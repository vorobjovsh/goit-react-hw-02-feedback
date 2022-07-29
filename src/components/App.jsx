import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';


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
        <FeedbackOptions optionGood={this.addGood} optionNeutral={this.addNeutral} optionBad={this.addBad}></FeedbackOptions>

        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={posit}></Statistics>
      </>

    );
  }
}

export default App;
