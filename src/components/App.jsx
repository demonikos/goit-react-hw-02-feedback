import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const value = event.target.textContent;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);
    const total = feedbackValues.reduce((prev, elem) => prev + elem, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) {
      const positive = Math.round((this.state.good / total) * 100);
      return positive;
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButtons
            btnNames={Object.keys(this.state)}
            btnClick={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            stateValues={this.state}
            total={this.countTotalFeedback}
            positive={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
