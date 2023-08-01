import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({ feedback, total, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
