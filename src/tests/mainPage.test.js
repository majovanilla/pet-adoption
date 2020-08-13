import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/App';

describe('main page renders correctly', () => {
  const enzymeWrapper = shallow(<Navbar />);

  it('renders', () => {
    expect(enzymeWrapper.exists()).toBe(true);
  });
});
