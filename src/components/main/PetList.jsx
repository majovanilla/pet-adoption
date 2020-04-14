import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pet from './Pet';
import { receivePets } from '../../actions';


class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fetchPets = () => (dispatch) => {
      fetch(`https://api.petfinder.com/v2/animals/${process.env.REACT_APP_PET_API_KEY}/${process.env.REACT_APP_PET_API_SECRET}`)
        .then((response) => response.json())
        .then((json) => console.log('api json: ', json))
        .then((json) => dispatch(receivePets(json)));
    };
  }

  render() {
    const filterPets = () => {
      const { pets, staticFilter, dinamicFilter } = this.props;
      if (staticFilter === 'all' || dinamicFilter === 'all') return (pets);
      return pets.filter((pet) => pet[staticFilter] === dinamicFilter);
    };

    return (
      <main className="container-fluid px-0">
        <ul className="col-12 row justify-content-center">
          { filterPets().map((pet) => (
            <li className="col-12 col-md-6 col-lg-3 m-lg-3" key={pet.id}>
              <Pet pet={pet} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => (
  {
    pets: state.pets.pets,
    staticFilter: state.filter.staticFilter,
    dinamicFilter: state.filter.dinamicFilter,
  }
);

// function mapDispatchToProps(dispatch) {
//   return {
//     pets: bindActionCreators(receivePets, dispatch),
//   };
// }

PetList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
  staticFilter: PropTypes.string.isRequired,
  dinamicFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PetList);
