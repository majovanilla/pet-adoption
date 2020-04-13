import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../actions/index';
import Filter from './Filter';

const SearchBar = (props) => {
  const { handleFilterChange } = props;

  return (
    <div className="searchBar container-fluid col-lg-9">
      <Form.Row className="mx-0 my-3 justify-content-between">
        <FormControl type="text" placeholder="My pet is..." className="px-2 mx-0 col-8" />
        {/* <Button variant="outline-info" className="mx-0 col-4">Find my pet</Button> */}
        <Filter handleFilterChange={handleFilterChange} />
      </Form.Row>
    </div>
  );
};

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (state, filter) => {
    dispatch(changeFilter(state, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
