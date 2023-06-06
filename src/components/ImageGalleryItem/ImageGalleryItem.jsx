import React from 'react';

const ImageGalleryItem = ({ webURL, largeImgURL, onImgClick }) => {
  const handleClick = () => {
    onImgClick(largeImgURL);
  };

  return (
    <li className="gallery-item">
      <img src={webURL} alt="" onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;
