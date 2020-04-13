import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../categories';

const Filter = (props) => {
  const { handleFilterChange } = props;

  const handleChange = (event) => {
    const staticFilter = event.target.options[event.target.selectedIndex].value;
    handleFilterChange(staticFilter);
  };

  return (
    <select className="form-selector col-3" name="category" onChange={handleChange}>
      {
      categories.map((category, index) => {
        const categoryKey = `CATEGORY_${index}`;

        return (
          <option key={categoryKey} value={category}>
            {category}
          </option>
        );
      })
    }
    </select>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
