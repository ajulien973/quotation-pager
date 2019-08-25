import React from 'react';
import { shallow } from 'enzyme';

import ProductSectionList from './productSectionList';
import ProductSection from '../productSection/productSection';

describe('components | pages | Devis | productionSectionList', () => {
  it('should build as much ProductSections than sections', () => {
    const props = {
      sections: [{id: 1}, {id: 2}, {id: 3}],
    };
    const wrapper = shallow(<ProductSectionList {...props} />);
    expect(wrapper.find(ProductSection)).toHaveLength(3);
  });
});
