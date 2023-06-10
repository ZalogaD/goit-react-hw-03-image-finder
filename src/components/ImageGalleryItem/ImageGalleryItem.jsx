import React from 'react';
import { GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webURL, largeImgURL, onImgClick }) => {
  const handleClick = () => {
    onImgClick(largeImgURL);
  };

  return (
    <GalleryItem>
      <GalleryImg src={webURL} alt="" onClick={handleClick} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
