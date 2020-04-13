import React from 'react';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, changeDinamicFilter } from '../../actions/index';
import Filter from './Filter';
import DinamicFilter from './DinamicFilter';

const SearchBar = (props) => {
  const {
    handleFilterChange, handleDinamicFilterChange, staticFilter,
  } = props;
  console.log('filter in Searchbar:', staticFilter);
  return (
    <div className="searchBar container-fluid col-lg-9">
      <Form.Row className="mx-0 my-3 justify-content-between">
        {/* <FormControl type="text" placeholder="First select a filter and then search a pet..." className="px-2 mx-0 col-8" /> */}
        {/* <Button variant="outline-info" className="mx-0 col-4">Find my pet</Button> */}
        <Filter handleFilterChange={handleFilterChange} />
        {/* <DinamicFilter staticFilter={staticFilter} handleDinamicFilterChange={handleDinamicFilterChange} /> */}
      </Form.Row>
    </div>
  );
};

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleDinamicFilterChange: PropTypes.func.isRequired,
  staticFilter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  staticFilter: state.filter.staticFilter,
  dinamicFilter: state.filter.dinamicFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (state, staticFilter) => {
    dispatch(changeFilter(state, staticFilter));
  },
  handleDinamicFilterChange: (state, dinamicFilter) => {
    // dispatch(changeDinamicFilter(state, dinamicFilter));
    console.log(dinamicFilter);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
