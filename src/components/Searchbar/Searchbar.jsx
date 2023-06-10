import React, { Component } from 'react';
import { Search, Form, Btn, Span, Input } from './Searchbar.styled';
import { ReactComponent as Icon } from '../iconbar.svg';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Search>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <Icon width="30px" height="30px" />
            <Span>Search</Span>
          </Btn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
      </Search>
    );
  }
}

export default Searchbar;
