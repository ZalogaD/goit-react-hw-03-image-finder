import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  handleImgClick = selectedImage => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              image={image}
              onImgClick={this.handleImgClick}
            />
          ))}
        </Gallery>
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImgURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
