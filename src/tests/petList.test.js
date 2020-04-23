import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { PetList } from '../containers/PetList';
import Enzyme, { shallow } from 'enzyme'
import { initPetState, initFilterState } from '../reducers/initState';
import getToken from '../helpers/getToken';
import saveAPI from '../helpers/saveAPI';

function setup() {
  const props = {
    animals: initPetState.animals,
    staticFilter: initFilterState.staticFilter,
    dinamicFilter: initFilterState.dinamicFilter,
  }

  const wrapper = shallow(<PetList {...props} />)

  return {
    props,
    wrapper
  }
}

let container = null;

describe('PetList Component', () => {
  const { wrapper } = setup();

  it('should call the api once before rendering', () => {
    expect(getToken.mock.calls.length).toBe(1)
  })

  it('should call filterPets once before rendering', () => {
    expect(wrapper.props.filterPets.mock.calls.length).toBe(1)
  })

  // it('renders the PetList component', () => {
  //   expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  // })
});