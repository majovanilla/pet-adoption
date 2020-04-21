import '@testing-library/jest-dom'
import React from 'react'
import { screen } from '@testing-library/react'
import Navbar from '../components/App';
import { render } from 'enzyme';

import { unmountComponentAtNode } from "react-dom";


describe('main page renders correctly', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


  it('has an h2 with the app title', () => {
    render(<Navbar />)
    expect(screen.getByText('Pet Finder')).toBeInTheDocument;
  });

  // it('has two filters', () => {
  //   render(<Filter />)
  //   render(<DinamicFilter />)
  //   expect(screen.getAllByText('custom-select')).toHaveLength(2);
  // });
})