import React from 'react';

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

export default Button;
