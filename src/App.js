import './App.css';
import Section from './components/Section';
// import Button from './components/Button';
import Statistics from './components/Statistics';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const TotalFeedback = () => {
    return good + neutral + bad;
  };

  const PositiveFeedbackPercentage = () => {
    return TotalFeedback() ? Math.round((good / TotalFeedback()) * 100) : 0;
  };

  return (
    <div className="app">
      <Section title="Pease leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          type="button"
          onLeaveFeedback={handleClick}
        />
      </Section>
      {TotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalFeedback()}
            positivePercentage={PositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <p>Not feedback given</p>
      )}
    </div>
  );
}
