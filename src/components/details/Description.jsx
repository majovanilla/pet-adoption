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
    <div className={`${detailsStyles.description} col-6`}>
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
        <p>
          <img className={detailsStyles.contactIcon} src="https://img.icons8.com/metro/52/000000/email.png" alt="email icon" />
          {contact.email}
        </p>
        <p>
          <img className={detailsStyles.contactIcon} src="https://img.icons8.com/android/48/000000/phone.png" alt="phone icon" />
          {contact.phone}
        </p>
        <p>
          <img className={detailsStyles.contactIcon} src="https://img.icons8.com/metro/52/000000/marker.png" alt="location icon" />
          {`${contact.address.city} ${contact.address.state}`}
        </p>
      </div>
    </div>
  );
};


Description.propTypes = {
  pet: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Description;
