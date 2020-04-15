import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Pet from './Pet';
import { receivePets } from '../../actions';
import getToken from '../../helpers/getToken';
import saveAPI from '../../helpers/saveAPI';


class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { handleJson } = this.props;
    getToken().then((token) => {
      saveAPI(token)
      // .then((response) => response.json())
        .then((json) => { handleJson(json); })
        .then((json) => console.log('response', (json)))
        .then(this.state.loading = false);
    });
  }


  render() {
    const { loading } = this.state;
    const filterPets = () => {
      const { animals, staticFilter, dinamicFilter } = this.props;
      if (staticFilter === 'all' || dinamicFilter === 'all') return (animals);
      return animals.filter((pet) => pet[staticFilter] === dinamicFilter);
    };

    return (
      <main className="m-0 px-0">
        <ul className="col-12 m-0 p-0 row justify-content-center">
          { filterPets().map((pet) => (
            <li className="col-12 col-md-6 col-lg-3 m-lg-3 mt-3 p-0" key={pet.id}>
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )
                : <Pet pet={pet} />}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => (
  {
    animals: state.animals.animals,
    staticFilter: state.filter.staticFilter,
    dinamicFilter: state.filter.dinamicFilter,
  }
);

const mapDispatchToProps = (dispatch) => ({
  handleJson: (json) => {
    dispatch(receivePets(json));
  },
});


PetList.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.object).isRequired,
  staticFilter: PropTypes.string.isRequired,
  dinamicFilter: PropTypes.string.isRequired,
  handleJson: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetList);
