import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, changeDinamicFilter } from '../actions/index';
import Filter from '../components/main/filter/Filter';
import DinamicFilter from '../components/main/filter/DinamicFilter';
import searchBar from '../scss/searchBar.module.scss';

const SearchBar = props => {
  const {
    handleFilterChange, handleDinamicFilterChange, staticFilter,
  } = props;

  const handleChange = event => {
    if (event.target.name === 'category') {
      const staticFilter = event.target.options[event.target.selectedIndex].value;
      handleFilterChange(staticFilter);
    }
    if (event.target.name === 'sub-category') {
      const dinamicFilter = event.target.options[event.target.selectedIndex].value;
      handleDinamicFilterChange(dinamicFilter);
    }
  };

  return (
    <div className={`${searchBar.searchBar} mx-auto col-12 my-3`}>
      <h2 className="col-6 mb-3 align-self-center">Find your next best friend</h2>
      <div className="d-flex flex-column col-6">
        <Filter handleChange={handleChange} />
        <DinamicFilter staticFilter={staticFilter} handleChange={handleChange} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleDinamicFilterChange: PropTypes.func.isRequired,
  staticFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  staticFilter: state.filter.staticFilter,
  dinamicFilter: state.filter.dinamicFilter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: (state, staticFilter) => {
    dispatch(changeFilter(state, staticFilter));
  },
  handleDinamicFilterChange: (state, dinamicFilter) => {
    dispatch(changeDinamicFilter(state, dinamicFilter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
