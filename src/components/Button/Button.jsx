import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onClick, isHidden }) => {
  const handleClick = event => {
    event.preventDefault();
  };

  return (
    <Btn
      type="button"
      onClick={handleClick}
      style={{ display: isHidden ? 'none' : 'block' }}
    >
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool,
};

export default Btn;
