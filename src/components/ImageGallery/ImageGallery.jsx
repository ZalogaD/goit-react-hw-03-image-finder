import React from 'react';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <Gallery>
      {images.map(image => (
        <li key={image.id}>
          <img
            src={image.webformatURL}
            alt="Gallery Item"
            onClick={() => onImgClick(onImgClick)}
          />
        </li>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImgURL: PropTypes.string,
    })
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
