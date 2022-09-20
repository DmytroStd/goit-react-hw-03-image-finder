import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { RiImageAddFill } from 'react-icons/ri';

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <RiImageAddFill style={{ width: 15, height: 15, marginRight: 5 }} />
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
