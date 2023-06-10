import React from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
//import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImgURL, onImgClick, tags }) => {
  const handleClick = () => {
    onImgClick(largeImgURL);
  };

  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt={tags} onClick={handleClick} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
