import React from 'react';


const Filter = () => {
  const categories = [
    'All Pets', 'Type', 'Breed', 'Size', 'Gender', 'Age', 'Color',
  ];

  return (
    <select className="form-selector col-3" name="category">
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

export default Filter;
