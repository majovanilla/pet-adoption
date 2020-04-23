import React from "react";
import Description from '../components/details/Description';
import { shallow } from 'enzyme'

function setup() {
  const props = {
    pet: {
      id: 47842151,
      organization_id: "GA562",
      url: "https://www.petfinder.com/cat/vicki-47842151/ga/blue-ridge/humane-society-of-blue-ridge-ga562/?referrer_id=7cde27c5-311a-4319-b55f-dca594593727",
      type: "Cat",
      species: "Cat",
      breeds: { primary: "Domestic Short Hair", secondary: null, mixed: false, unknown: false },
      colors: { primary: null, secondary: null, tertiary: null },
      age: "Young",
      gender: "Female",
      size: "Medium",
      coat: null,
      attributes: { spayed_neutered: true, house_trained: false, declawed: false, special_needs: false, },
      environment: { children: null, dogs: null, cats: null },
      tags: [],
      name: "Vicki",
      description: "I am on the shy side but I am a beautiful independent girl. Please come and meet me and see...",
      photos: [],
      videos: [],
      status: "adoptable",
      status_changed_at: "2020-04-20T14:15:52+0000",
      published_at: "2020-04-20T14:15:52+0000",
      distance: null,
      contact: {
        email: "humanesociety@etcmail.com",
        phone: "(706) 632-4357",
        address: {
          address1: "171 Mineral Spring Road",
          address2: null,
        },
        city: "Blue Ridge",
        state: "GA",
        postcode: "30513",
        country: "US",
      },
      _links: {
        self: { href: "/v2/animals/47842151" }, type: { href: "/v2/types/cat" }
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
