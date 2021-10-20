import PropTypes from 'prop-types';
import Button from '../components/Button';

export default function FeedbackOptions({ options, type, onLeaveFeedback }) {
  return (
    <div>
      {options.map(opt => {
        return <Button text={opt} type={type} key={opt} onClick={onLeaveFeedback} />;
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  onClick: PropTypes.func,
};
