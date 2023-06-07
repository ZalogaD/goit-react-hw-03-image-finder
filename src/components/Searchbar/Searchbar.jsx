import { Component } from 'react';
import { Search, Form, Btn, Span, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = Component;

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
          <Span>Search</Span>
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Search>
  );
};

export default Searchbar;
