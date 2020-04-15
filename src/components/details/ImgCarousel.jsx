import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import detailsStyles from '../../scss/detailsStyles.module.scss';

const ImgCarousel = ({ photos }) => (
  <Carousel className="col-12 col-lg-6 p-0">
    {photos.map((photo) => (
      <Carousel.Item className={detailsStyles.carouselItem}>
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
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImgCarousel;
