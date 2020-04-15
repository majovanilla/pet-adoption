import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import mainStyles from '../../scss/mainStyles.module.scss';

const Pet = ({ pet }) => {
  const {
    id, age, gender, name, photos, status, tags,
  } = pet;

  let photo;
  if (photos.length === 0) photo = <Card.Img variant="top" src="../../images/petImage.png" className={mainStyles.image} />;
  if (photos.length) photo = <Card.Img variant="top" src={photos[0].medium} className={mainStyles.image} />;

  return (
    <Card className={mainStyles.petCard}>
      <div className={mainStyles.imageCard}>
        {photo}
      </div>
      <Card.Body className="col-12 row bg-dark py-0 h-25 align-items-center">
        <Link to={{ pathname: `/details/${id}`, state: { pet } }} className="col-12 col-lg-4 px-0 text-center pt-2">
          <Card.Title className={mainStyles.cardTitle}>{name}</Card.Title>
        </Link>
        <Card.Text className="col-12 col-lg-8 m-0 py-1 px-0 text-white d-flex justify-content-between">
          <span className="pr-2">{age}</span>
          <span className="pr-2">{gender}</span>
          <span className=" ">{status}</span>
        </Card.Text>
        <div className="col-12 px-1 pb-1 d-flex justify-content-between">
          { tags.map((tag, i) => (<Badge variant="secondary" className="mr-1 my-1" key={`${id}${i * 10}`}>{tag}</Badge>))}
        </div>
      </Card.Body>
    </Card>
  );
};

Pet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default Pet;
