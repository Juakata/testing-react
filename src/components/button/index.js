import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <button type="button" data-test="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
