import React from "react";
import ImgCarousel from '../components/details/ImgCarousel';
import { shallow } from 'enzyme';
import Carousel from 'react-bootstrap/Carousel';

function setup() {
  const props = {
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47842140/1/?bust=1587391960&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47842140/1/?bust=1587391960&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47842140/1/?bust=1587391960&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/47842140/1/?bust=1587391960",
      }
    ],
    id: 64651,
  }

  const wrapper = shallow(<ImgCarousel {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Carousel component', () => {
  const { wrapper } = setup();

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should render the carousel', () => {
    expect(wrapper.find(Carousel.Item).exists()).toBe(true);
  })
});
