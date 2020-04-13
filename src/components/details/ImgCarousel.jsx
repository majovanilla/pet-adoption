import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import detailsStyles from '../../scss/detailsStyles.module.scss';

const ImgCarousel = () => (
  <Carousel className="col-12 col-lg-6 p-0">
    <Carousel.Item>
      <img
        className={`d-block w-100 ${detailsStyles.carouselImage}`}
        src="https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2020/04/02/pets.jpg?itok=Q4opdI7w "
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default ImgCarousel;
