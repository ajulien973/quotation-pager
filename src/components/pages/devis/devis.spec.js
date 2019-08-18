import React from 'react';
import Devis from './devis';
import { shallow } from 'enzyme';

describe('components | pages | Devis', () => {
  it('renders correctly', () => {
    const props = {
      data: {
        title: 'myDevis',
        introductionLetter: 'myLetter'
      },
    };
    const wrapper = shallow(<Devis {...props} />);
    expect(wrapper.find('h1').text()).toBe('myDevis');
    expect(wrapper.find('p').text()).toBe('myLetter');
  });
});
