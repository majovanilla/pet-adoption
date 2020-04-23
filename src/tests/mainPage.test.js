import '@testing-library/jest-dom';
import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../components/App';

Enzyme.configure({ adapter: new Adapter() })


describe('main page renders correctly', () => {
  const enzymeWrapper = shallow(<Navbar />)

  it('has an h2 with the app title', () => {
    expect(enzymeWrapper.find('h2').text()).toBe('Pet Finder')
  });

  // it('has two filters', () => {
  //   render(<Filter />)
  //   render(<DinamicFilter />)
  //   expect(screen.getAllByText('custom-select')).toHaveLength(2);
  // });
})