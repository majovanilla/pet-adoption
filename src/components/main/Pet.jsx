import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Pet = ({ pet }) => {
  const {
    id, url, type, species, age, gender, size, name, photos, status, tags,
  } = pet;
  return (
    <BrowserRouter>
      <Link to="/">
        <article className="pet-card">
          <img src={photos} alt="Pet" />
          <h3>{name}</h3>

        </article>
      </Link>
    </BrowserRouter>
  );
};

// const mapStateToProps = (state) => (
//   console.log(state)
// );

// export default connect(mapStateToProps)(Pet);
export default Pet;
