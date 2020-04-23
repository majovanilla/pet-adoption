import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme'
// import { render } from './test-utils';
import Navbar from '../components/App';

describe('main page renders correctly', () => {
  const enzymeWrapper = shallow(<Navbar />).dive();
  // const navbar = render(<Navbar />);

  it('renders', () => {
    expect(enzymeWrapper.exists()).toBe(true);
  });
})