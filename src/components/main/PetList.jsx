import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pet from './Pet';

const PetList = ({ pets, staticFilter, dinamicFilter }) => {
  // const array = pets.filter((pet) => console.log('filter pet: ', pet[staticFilter] === dinamicFilter));
  // console.log('array: ', array);
  const filterPets = () => {
    if (staticFilter === 'all' || dinamicFilter === 'all') return (pets);
    return pets.filter((pet) => pet[staticFilter] === dinamicFilter);
  };

  return (
    <main className="container-fluid px-0">
      <ul className="col-12 row justify-content-center">
        { filterPets().map((pet) =>
          // console.log('pet:', pet);
          // console.log('pet:', pet[staticFilter]);
          (
            <li className="col-12 col-md-6 col-lg-3 m-lg-3" key={pet.id}>
              <Pet pet={pet} />
            </li>
          ))}
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => (
  {
    pets: state.pets.animals,
    staticFilter: state.filter.staticFilter,
    dinamicFilter: state.filter.dinamicFilter,
  }
);

PetList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
  staticFilter: PropTypes.string.isRequired,
  dinamicFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PetList);
