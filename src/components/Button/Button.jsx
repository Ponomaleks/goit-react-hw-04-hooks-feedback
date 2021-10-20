import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ text, type, onClick }) {
  return (
    <button className={s.button} type={type} name={text} onClick={onClick}>
      {text[0].toUpperCase() + text.slice(1)}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
