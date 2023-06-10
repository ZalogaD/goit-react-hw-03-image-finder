import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    const handleClick = event => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <Img src={imageUrl} alt="" />
      </Modal>
    </Overlay>
  );
};

export default Modal;
