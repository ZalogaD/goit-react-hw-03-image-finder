import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { BallTriangle } from 'react-loader-spinner';
import Button from './Button/Button';
import { fetchParams } from './API/PixabyAPI';
import { Cont } from './App.styled';
export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchParams();
    }
  }

  fetchParams = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    fetchParams(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error: ', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Cont>
          {images.length > 0 && <ImageGallery images={images} />}
          {isLoading && <BallTriangle visible={isLoading} />}
          {images.length > 0 && !isLoading && (
            <Button onClick={this.handleLoadMore} />
          )}
        </Cont>
      </>
    );
  }
}
export default App;
