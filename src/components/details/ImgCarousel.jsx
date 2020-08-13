import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import detailsStyles from '../../scss/detailsStyles.module.scss';

const ImgCarousel = ({ photos, id }) => (
  <Carousel className="col-12 col-lg-6 p-0">
    {photos.map((photo, i) => (
      <Carousel.Item className={detailsStyles.carouselItem} key={`${id}-${i * 1000}`}>
        <img
          className={`d-block w-100 ${detailsStyles.carouselImage}`}
          src={photo.medium}
          alt="First slide"
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

ImgCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
};

export default ImgCarousel;
