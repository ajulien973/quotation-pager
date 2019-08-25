import React from 'react';
import ProductSectionList from './productSectionList';
import { buildSectionsByLocations } from './sectionsBuilder';

const ProductSectionListContainer = props => {
  const {
    lots = [],
    locations = [],
    shouldBuildByLocations = false,
  } = props;

  const sections = shouldBuildByLocations ? buildSectionsByLocations(lots, locations) : lots;

  return (
    <ProductSectionList sections={sections} />
  );
};

export default ProductSectionListContainer;
