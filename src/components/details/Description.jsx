import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import detailsStyles from '../../scss/detailsStyles.module.scss';

const Description = ({ pet }) => {
  const {
    type,
    age,
    gender,
    size,
    coat,
    name,
    description,
    status,
    contact,
  } = pet;

  return (
    <div className={`${detailsStyles.description} col-12 col-lg-6`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="row col-12">
        <Badge variant="secondary" className="mr-1 my-1 p-1">{type}</Badge>
        <Badge variant="secondary" className="mr-1 my-1 p-1">{age}</Badge>
        <Badge variant="secondary" className="mr-1 my-1 p-1">{gender}</Badge>
        <Badge variant="secondary" className="mr-1 my-1 p-1">{size}</Badge>
        <Badge variant="secondary" className="mr-1 my-1 p-1">{coat}</Badge>
        <Badge variant="secondary" className="mr-1 my-1 p-1">{status}</Badge>
      </div>
      <div className="contactInfo mt-5">
        <h4 className="mb-3">Contact:</h4>
        <div className="emailDiv col-12 row align-items-center pb-3 px-0 m-0">
          <img className={`${detailsStyles.contactIcon} `} src="https://img.icons8.com/metro/52/000000/email.png" alt="email icon" />
          <p className="m-0">{contact.email}</p>
        </div>
        <div className="phoneDiv col-12 row align-items-center pb-3 px-0 m-0">
          <img className={`${detailsStyles.contactIcon}`} src="https://img.icons8.com/android/48/000000/phone.png" alt="phone icon" />
          <p className="m-0">{contact.phone}</p>
        </div>
        <div className="addressDiv col-12 row align-items-center pb-3 px-0 m-0">
          <img className={`${detailsStyles.contactIcon}`} src="https://img.icons8.com/metro/52/000000/marker.png" alt="location icon" />
          <p className="m-0">{`${contact.address.city}, ${contact.address.state}`}</p>
        </div>
      </div>
    </div>
  );
};


Description.propTypes = {
  pet: PropTypes.shape({
    type: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    coat: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
  }).isRequired,
};

export default Description;
