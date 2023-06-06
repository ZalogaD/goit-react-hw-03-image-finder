import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

const API_KEY = '35194171-84f1d5f9b415a31c1af013b41';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImgClick = largeImgURL => {
    setSelectedImage(largeImgURL);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        onSubmit={handleSearch}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onImgClick={handleImgClick} />
      )}

      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}

      {selectedImage && (
        <Modal onClose={handleCloseModal}>
          <img src={selectedImage} alt="Large" />
        </Modal>
      )}
    </div>
  );
};

export default App;
