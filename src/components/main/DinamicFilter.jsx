import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { detailedCategories } from '../../helpers/categories';
import mainStyles from '../../scss/mainStyles.module.scss';

const DinamicFilter = props => {
  const { handleChange, staticFilter } = props;
  const detailCat = detailedCategories[staticFilter];

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
      {console.log(detailCat)}
    </Form.Control>
  );
};

DinamicFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  staticFilter: PropTypes.string.isRequired,
};

export default DinamicFilter;
