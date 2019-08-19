import React, { Fragment } from 'react';
import ProductSection from '../productSection/productSection';
import { buildSectionsByLocations } from './sectionsBuilder';

const ProductSectionList = props => {
  const {
    lots = [],
    locations = [],
    shouldBuildByLocations = false,
  } = props;

  const sections = shouldBuildByLocations ? buildSectionsByLocations(lots, locations) : lots;
  return (
    <Fragment>
      { sections.map((section) =>
        <ProductSection {...section} />
      )}
    </Fragment>
  );
};

export default ProductSectionList;
