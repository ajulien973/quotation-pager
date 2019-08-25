import React from 'react';
import { shallow } from 'enzyme';

import ProductSectionListContainer from './productSectionList.container';
import ProductSectionList from './productSectionList';
import * as sectionBuilder from './sectionsBuilder';

describe('components | pages | Devis | productionSectionList', () => {
  describe('when shouldBuildByLocations is false', () => {
    it('should use lots as sections', () => {
      const props = {
        lots: [{id: 1}, {id: 2}, {id: 3}],
        shouldBuildByLocations: false,
      };
      const wrapper = shallow(<ProductSectionListContainer {...props} />);
      expect(wrapper.find(ProductSectionList).props().sections)
        .toStrictEqual(props.lots);
    });
  });

  describe('when shouldBuildByLocations is true', () => {
    it('should build sections by locations', () => {
      const props = {
        lots: [{id: 1}, {id: 2}, {id: 3}],
        shouldBuildByLocations: true,
      };
      jest.spyOn(sectionBuilder, 'buildSectionsByLocations')
        .mockImplementation(() => ['fakeSectionsByLocations'])

      const wrapper = shallow(<ProductSectionListContainer {...props} />);
      expect(wrapper.find(ProductSectionList).props().sections)
        .toStrictEqual(['fakeSectionsByLocations']);
    });
  });
});
