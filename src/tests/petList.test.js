import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { PetList } from '../containers/PetList';
import { shallow } from 'enzyme';

let container = null;

describe('PetList Component', () => {
  let wrapper;
  const mockLoginfn = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    wrapper = shallow(<PetList handleJson={mockLoginfn} />)
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('should call the api once before rendering', () => {
    expect(mockLoginfn.mock.calls.length).toBe(1)
  })

  it('renderst the PetList component', () => {

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  })


  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore;
});