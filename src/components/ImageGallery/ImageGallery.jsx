import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webURL={image.webURL}
          largeImgURL={image.largeImgURL}
          onImgClick={onImgClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
