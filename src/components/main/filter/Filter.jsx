import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { categories } from '../../../helpers/categories';
import mainStyles from '../../../scss/mainStyles.module.scss';


const Filter = props => {
  const { handleChange } = props;

  return (
    <Form.Control as="select" size="lg" custom name="category" className={`${mainStyles.selector} col-4 mb-3`} onChange={handleChange}>
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
    </Form.Control>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
