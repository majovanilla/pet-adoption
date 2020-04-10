import React from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';

const PetList = (props) => {
  const { pets } = props;
  return (
    <main>
      <ul>
        <li>
          { pets.map((pet) => (
            <Pet pet={pet} key={pet.id} />
          ))}
        </li>
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => (
  { pets: state.pets }
);

export default connect(mapStateToProps)(PetList);
