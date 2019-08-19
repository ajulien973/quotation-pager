import React from 'react';
import ProductSectionList from './productSectionList';
import { shallow } from 'enzyme';
import ProductSection from '../productSection/productSection';

describe('components | pages | Devis | productionSectionList', () => {
  describe('when shouldBuildByLocations is false', () => {
    it('should build as much ProductSections than lots', () => {
      const props = {
        lots: [{id: 1}, {id: 2}, {id: 3}],
        shouldBuildByLocations: false,
      };
      const wrapper = shallow(<ProductSectionList {...props} />);
      expect(wrapper.find(ProductSection)).toHaveLength(3);
    });
  });

  describe('when shouldBuildByLocations is true', () => {
    it.skip('should build as much ProductSections than locations + 1 for Autres prestations', () => {
      const props = {
        lots: [{id: 1}],
        locations: [{name: 'kitchen'}, {name: 'bedroom'}],
        shouldBuildByLocations: true,
      };
      const wrapper = shallow(<ProductSectionList {...props} />);
      expect(wrapper.find(ProductSection)).toHaveLength(3);
    });
  });
});
