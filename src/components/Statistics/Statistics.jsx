import PropTypes from 'prop-types';

function Statistics ({good, neutral, bad, total, positivePercentage}) {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: <span>{good}</span></p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>Total: <span>{total}</span></p>
      <p>Positive feedback: <span>{positivePercentage}%</span></p>
    </>

  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posit: PropTypes.number
};

export default Statistics;
