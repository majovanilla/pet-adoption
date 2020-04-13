import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { handleFilterChange } = props;
  const categories = [
    'All Pets', 'Type', 'Breed', 'Size', 'Gender', 'Age', 'Color',
  ];

  const handleChange = (event) => {
    const filter = event.target.options[event.target.selectedIndex].value;
    handleFilterChange(filter);
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
