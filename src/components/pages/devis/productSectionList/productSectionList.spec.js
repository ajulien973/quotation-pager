import React from 'react';
import ProductSectionList from './productSectionList';
import { shallow } from 'enzyme';
import ProductSection from '../productSection/productSection';

describe('components | pages | Devis | productionSectionList', () => {
  it('should build as much ProductSections than lots', () => {
    const props = {
      lots: [{id: 1}, {id: 2}, {id: 3}]
    };
    const wrapper = shallow(<ProductSectionList {...props} />);
    expect(wrapper.find(ProductSection)).toHaveLength(3);
  });
});
