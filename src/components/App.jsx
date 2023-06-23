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
      totalHits: 0,
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
    //eslint-disable-next-line
    const per_page = 12;

    try {
      this.setState({ isLoading: true, page: 1, isButtonVisible: false });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const { hits, totalHits } = response.data;

      this.setState({
        images: hits,
        totalHits: totalHits,
        isButtonVisible: hits.length < totalHits,
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    this.handleSearch(searchQuery, page + 1)
      .then(() => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.log('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
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
    this.setState({ searchQuery: value, page: 1 }, () => {
      this.handleSearch();
    });
  };

  render() {
    const { searchQuery, images, isLoading, selectedImage, totalHits } =
      this.state;
    const showLoadMoreButton = images.length < totalHits;

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
          searchQuery.length > 0 &&
          images.length > 0 && (
            <ImageGallery
              images={images}
              onImgClick={this.handleImgClick}
              loadMore={this.handleLoadMore}
            />
          )
        )}

        {showLoadMoreButton && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}

        {selectedImage && (
          <Modal imageUrl={selectedImage} onClose={this.handleCloseModal}>
            <img src={selectedImage} alt="Велике зображення" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
