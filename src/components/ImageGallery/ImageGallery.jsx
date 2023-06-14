import React from 'react';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log('images', images);

  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
        />
        //<li key={image.id}>
        //<img
        //src={image.webformatURL}
        //alt="Gallery Item"
        //onClick={() => onImgClick(onImgClick)}
        ///>
        //</li>
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
