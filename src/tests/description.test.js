import React from "react";
import Description from '../components/details/Description';
import { shallow } from 'enzyme'

function setup() {
  const props = {
    pet: {
      type: "Cat",
      species: "Cat",
      age: "Young",
      gender: "Female",
      size: "Medium",
      coat: null,
      name: "Vicki",
      description: "I am on the shy side but I am a beautiful independent girl. Please come and meet me and see...",
      photos: [],
      status: "adoptable",
      contact: {
        email: "humanesociety@etcmail.com",
        phone: "(706) 632-4357",
        address: {
          address1: "171 Mineral Spring Road",
          address2: null,
        },
        city: "Blue Ridge",
        state: "GA",
      },
    }
  }

  const wrapper = shallow(<Description {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Description component', () => {
  const { wrapper, props } = setup();

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should have an h3', () => {
    expect(wrapper.find('h3').text()).toEqual(props.pet.name);
  })

  it('should render email', () => {
    const div = wrapper.find('.emailDiv')
    expect(div.childAt(1).text()).toEqual(props.pet.contact.email);
  })

  it('should render phone', () => {
    const div = wrapper.find('.phoneDiv')
    expect(div.childAt(1).text()).toEqual(props.pet.contact.phone);
  })

  it('should render address', () => {
    const div = wrapper.find('.addressDiv')
    expect(div.childAt(1).text()).toEqual(`${props.pet.contact.address.city}, ${props.pet.contact.address.state}`);
  })
});
