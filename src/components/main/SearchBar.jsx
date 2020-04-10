import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Filter from './Filter';

const SearchBar = () => (
  <div className="searchBar">
    <Filter />
    <Form.Row className="my-3 justify-content-center">
      <FormControl type="text" placeholder="My pet is..." className="px-2 mx-2 col-7" />
      <Button variant="outline-info" className="mx-2 col-4">Find my pet</Button>
    </Form.Row>
  </div>
);

export default SearchBar;
