import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, changeDinamicFilter } from '../../actions/index';
import Filter from './Filter';
import DinamicFilter from './DinamicFilter';
import mainStyles from '../../scss/mainStyles.module.scss';

const SearchBar = (props) => {
  const {
    handleFilterChange, handleDinamicFilterChange, staticFilter,
  } = props;
  return (
    <div className={`${mainStyles.searchBar} mx-auto col-lg-9 my-3`}>
      <h2 className="mb-3">Search Parameters</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <DinamicFilter staticFilter={staticFilter} handleFilterChange={handleDinamicFilterChange} />
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
