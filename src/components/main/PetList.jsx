import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pet from './Pet';

const PetList = ({ pets }) => (
  <main className="">
    <ul className="row">
      { pets.map((pet) => (
        <Pet pet={pet} key={pet.id} />
      ))}
    </ul>
  </main>
);

const mapStateToProps = (state) => (
  { pets: state.pets }
);

PetList.propTypes = {
  pets: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(PetList);
