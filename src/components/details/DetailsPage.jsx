import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import ImgCarousel from './ImgCarousel';

const DetailsPage = ({ location }) => {
  const { pet } = location.state;
  const { photos, id } = pet;

  return (
    <div className="row col-12 m-0 p-0">
      <div className="col-12 row pb-2 mb-5 px-0 mx-0">
        <ImgCarousel photos={photos} id={id} />
        <Description pet={pet} />
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      pet: PropTypes.shape({
        photos: PropTypes.arrayOf(PropTypes.object).isRequired,
        id: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};

export default DetailsPage;
