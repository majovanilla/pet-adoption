import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import mainStyles from '../../scss/mainStyles.scss';

const Pet = ({ pet }) => {
  const {
    id, age, gender, name, photos, status, tags,
  } = pet;
  return (
    <BrowserRouter>
      <li className="col-12 col-md-6 col-lg-4 mb-3">
        <Card className="">
          <Card.Img variant="top" src={photos[0].medium} />
          <Card.Body className="row bg-dark">
            <Link to={`/details/${id}`} className="col-4">
              <Card.Title className={mainStyles.cardTitle}>{name}</Card.Title>
            </Link>
            <Card.Text className="col-8 m-0 text-white">
              <span className="pr-2">{age}</span>
              <span className="pr-2">{gender}</span>
              <span className=" ">{status}</span>
            </Card.Text>
            <div className="row m-0 p-3 justify-content-between">
              { tags.map((tag) => (<Badge variant="secondary" className="mr-1 my-1">{tag}</Badge>))}
            </div>
          </Card.Body>
        </Card>
      </li>
    </BrowserRouter>
  );
};

Pet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.shape({
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
      full: PropTypes.string,
    }).isRequired,
    status: PropTypes.number.isRequired,
    tags: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Pet;
