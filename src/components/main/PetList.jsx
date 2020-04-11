import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pet from './Pet';

const PetList = ({ pets }) => (
  <main className="container-fluid px-0">
    <ul className="col-12 row justify-content-center">
      { pets.map((pet) => (
        <li className="col-12 col-md-6 col-lg-3 m-lg-3" key={pet.id}>
          <Pet pet={pet} />
        </li>
      ))}
    </ul>
  </main>
);

const mapStateToProps = (state) => (
  { pets: state.pets }
);

PetList.propTypes = {
  pets: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(PetList);
