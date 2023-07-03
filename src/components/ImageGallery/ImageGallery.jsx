import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

<<<<<<< HEAD
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
=======
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
          largeImgURL={image.largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </Gallery>
  );
};
>>>>>>> 8906b21bb2c20f51b738cdfb27cb2fbad1182b9b

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImgURL: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
