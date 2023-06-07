import React from 'react';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImgItem
          key={image.id}
          webURL={image.webURL}
          largeImgURL={image.largeImgURL}
          onImgClick={onImgClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
