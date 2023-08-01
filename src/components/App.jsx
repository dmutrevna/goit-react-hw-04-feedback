import React, { useState } from 'react';
import { FeedbackBtn } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { AppPart } from './Section/Section.styled';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // nn
  const handleClick = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100) || 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const types = Object.keys(feedback);

  return (
    <AppPart>
      <Section title="Please leave Feedback">
        <FeedbackBtn types={types} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            feedback={feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppPart>
  );
};
