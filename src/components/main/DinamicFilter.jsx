import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { detailedCategories } from '../../helpers/categories';
import mainStyles from '../../scss/mainStyles.module.scss';

const DinamicFilter = (props) => {
  const { handleFilterChange } = props;
  const { staticFilter } = props;
  const detailCat = detailedCategories[staticFilter];


  const handleChange = (event) => {
    if (event.target.name === 'sub-category') {
      const dinamicFilter = event.target.options[event.target.selectedIndex].value;
      handleFilterChange(dinamicFilter);
    }
  };

  return (
    <Form.Control as="select" size="lg" custom name="sub-category" className={`${mainStyles.selector} col-4 mb-3`} onChange={handleChange}>
      { detailCat.map((category, index) => {
        const categoryKey = `CATEGORY_${index}`;

        return (
          <option key={categoryKey} value={category}>
            {category}
          </option>
        );
      })}
    </Form.Control>
  );
};

DinamicFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  staticFilter: PropTypes.string.isRequired,
};

export default DinamicFilter;
