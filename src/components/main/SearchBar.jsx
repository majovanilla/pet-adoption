import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, changeDinamicFilter } from '../../actions/index';
import Filter from './Filter';
import DinamicFilter from './DinamicFilter';

const SearchBar = (props) => {
  const {
    handleFilterChange, handleDinamicFilterChange, staticFilter,
  } = props;
  return (
    <div className="searchBar container-fluid col-lg-9">
      <Form.Row className="mx-0 my-3 justify-content-between">
        <Filter handleFilterChange={handleFilterChange} />
        <DinamicFilter staticFilter={staticFilter} handleDinamicFilterChange={handleDinamicFilterChange} />
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
    dispatch(changeDinamicFilter(state, dinamicFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
