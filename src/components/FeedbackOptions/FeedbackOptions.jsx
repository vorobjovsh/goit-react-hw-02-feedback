import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions ({optionGood, optionNeutral, optionBad}) {
  return (
    <>
        <div>
            <button className={s.feed} onClick={optionGood}>Good</button>
            <button className={s.feed} onClick={optionNeutral}>Neutral</button>
            <button className={`${s.feed} ${s.feedLast}`} onClick={optionBad}>Bad</button>
        </div>
    </>

  )
}

FeedbackOptions.propTypes = {
  optionGood: PropTypes.func.isRequired,
  optionNeutral: PropTypes.func.isRequired,
  optionBad: PropTypes.func.isRequired
};

export default FeedbackOptions;
