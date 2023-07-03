import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalCont } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImage } = this.props;
    return (
      <Overlay onClick={this.handleClick}>
        <ModalCont>
          <img src={selectedImage.largeImgUrl} alt={selectedImage.tags} />
        </ModalCont>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImgUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
