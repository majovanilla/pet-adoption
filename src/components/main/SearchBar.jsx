import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Filter from './Filter';

const SearchBar = () => (
  <div className="searchBar container-fluid col-lg-9">
    <Filter />
    <Form.Row className="mx-0 my-3 justify-content-between form-row">
      <FormControl type="text" placeholder="My pet is..." className="px-2 mx-0 col-7" />
      <Button variant="outline-info" className="mx-0 col-4">Find my pet</Button>
    </Form.Row>
  </div>
);

export default SearchBar;
