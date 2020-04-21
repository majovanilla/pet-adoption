// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import { PetList } from '../containers/PetList';
// import Enzyme, { shallow } from 'enzyme'

// function setup() {
//   const props = {
//     handleJson: jest.fn()
//   }

//   const wrapper = shallow(<PetList {...props} />)

//   return {
//     props,
//     wrapper
//   }
// }

// let container = null;

// describe('PetList Component', () => {
//   const { wrapper } = setup();

//   beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
//   });

//   afterEach(() => {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

//   it('should call the api once before rendering', () => {
//     expect(mockLoginfn.mock.calls.length).toBe(1)
//   })

//   // it('renders the PetList component', () => {
//   //   expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//   // })

//   global.fetch.mockRestore;
// });