import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  }

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
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>

        <Section title="Statistics">
            {total > 0 ? (
              <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={posit}></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
        </Section>
      </>
    );
  }
}

export default App;
