import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { BallTriangle } from 'react-loader-spinner';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      images: [],
      page: 1,
      isLoading: false,
      selectedImage: null,
    };
  }

  componentDidMount() {
    //this.handleSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    const { searchQuery, page } = this.state;
    const API_KEY = '35194171-84f1d5f9b415a31c1af013b41';

    try {
      this.setState({ isLoading: true, images: [] });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState({ images: response.data.hits });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.handleSearch();
      }
    );
  };

  handleImgClick = largeImgURL => {
    this.setState({ selectedImage: largeImgURL });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = value => {
    this.setState({ searchQuery: value });
    this.handleSearch();
  };

  render() {
    const { searchQuery, images, isLoading, selectedImage } = this.state;

    return (
      <div>
        <Searchbar
          value={searchQuery}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />

        {isLoading ? (
          <BallTriangle
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        ) : (
          searchQuery.length > 0 && (
            <ImageGallery
              images={images}
              onImgClick={this.handleImgClick}
              loadMore={this.handleLoadMore}
            />
          )
        )}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}

        {selectedImage && (
          <Modal onClose={this.handleCloseModal}>
            <img src={selectedImage} alt="Large" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
