import React from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onImgClick, tags, image }) => (
  <li>
    <GalleryItem
      src={webformatURL}
      alt={tags}
      onClick={() => onImgClick(image)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
