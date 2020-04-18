import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import petStyles from '../../scss/petStyles.module.scss';

const Pet = ({ pet }) => {
  const {
    id, age, gender, name, photos, status, tags,
  } = pet;

  let photo;
  if (photos.length === 0) photo = <Card.Img variant="top" src="../../images/petImage.png" className={petStyles.image} />;
  if (photos.length) photo = <Card.Img variant="top" src={photos[0].medium} className={petStyles.image} />;

  let tagDiv;
  if (tags.length) {
    tagDiv = (
      <div className="col-12 px-1 pb-1 d-flex justify-content-between">
        { tags.map((tag, i) => (<Badge variant="secondary" className="mr-1 my-1" key={`${id}${i * 10}`}>{tag}</Badge>))}
      </div>
    );
  }

  return (
    <Card className={petStyles.petCard}>
      <div className={petStyles.imageCard}>
        {photo}
      </div>
      <Card.Body className="col-12 row bg-dark py-0 align-items-center justify-content-between">
        <Link to={{ pathname: `/details/${id}`, state: { pet } }} className="col-12 col-md-4 px-0 text-center pt-2 pt-md-0">
          <Card.Title className={petStyles.cardTitle}>{name}</Card.Title>
        </Link>
        <Card.Text className="col-12 col-md-7 m-0 py-1 px-0 text-white d-flex justify-content-between">
          <span className="pr-2">{age}</span>
          <span className="pr-2">{gender}</span>
          <span className=" ">{status}</span>
        </Card.Text>
        {tagDiv}
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
