import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalCont } from './Modal.styled';

const Modal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalCont>
        <img src={selectedImage} alt="" />
      </ModalCont>
    </Overlay>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
