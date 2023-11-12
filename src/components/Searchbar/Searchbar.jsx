import React, { useState } from 'react';
import { Search, Form, Btn, Span, Input } from './Searchbar.styled';
import { ReactComponent as Icon } from '../iconbar.svg';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <Search>
      <Form onSubmit={handleSubmit}>
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
          onChange={handleInputChange}
        />
      </Form>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
