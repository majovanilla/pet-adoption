import React from 'react';
import PropTypes from 'prop-types';
import { categories, detailedCategories } from '../categories';

const DinamicFilter = (props) => {
  const { handleDinamicFilterChange } = props;
  const { staticFilter } = props;
  console.log('staticFilter in dinamicFilter: ', staticFilter);
  const detailCat = detailedCategories[staticFilter];
  console.log('detailed cat: ', detailCat);

  const handleChange = (event) => {
    if (event.target.name === 'sub-category') {
      const dinamicFilter = event.target.options[event.target.selectedIndex].value;
      handleDinamicFilterChange(dinamicFilter);
    }
  };

  return (
    <select className="form-selector col-3" name="sub-category" onChange={handleChange}>
      { detailCat.map((category, index) => {
        const categoryKey = `CATEGORY_${index}`;

        return (
          <option key={categoryKey} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

DinamicFilter.propTypes = {
  handleDinamicFilterChange: PropTypes.func.isRequired,
  staticFilter: PropTypes.string.isRequired,
};

export default DinamicFilter;
