// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import { PetList } from '../containers/PetList';
// import Enzyme, { shallow } from 'enzyme'
// import { initPetState, initFilterState } from '../reducers/initState';

// function setup() {
//   const props = {
//     handleJson: jest.fn,
//     animals: initPetState.animals,
//     staticFilter: initFilterState.staticFilter,
//     dinamicFilter: initFilterState.dinamicFilter,
//   }

//   const wrapper = shallow(<PetList {...props} />)
//   const getToken = jest.fn;
//   const saveAPI = jest.fn;

//   return {
//     props,
//     wrapper,
//     getToken,
//     saveAPI
//   }
// }

// describe('PetList Component', () => {
//   test('renders the PetList component', () => {
//     const wrapper = setup();
//     expect(wrapper.exists()).toBe(true);
//   })

//   // it('should call the api once before rendering', () => {
//   //   expect(getToken.mock.calls.length).toBe(1)
//   // })

//   // it('should call filterPets once before rendering', () => {
//   //   expect(filterPets.mock.calls.length).toBe(1)
//   // })

// });