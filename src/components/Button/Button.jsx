import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, isHidden }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      style={{ display: isHidden ? 'none' : 'block' }}
    >
      Load more
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool,
};

export default Button;
