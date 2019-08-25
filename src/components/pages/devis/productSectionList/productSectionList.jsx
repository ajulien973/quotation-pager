import React, { Fragment } from 'react';
import ProductSection from '../productSection/productSection';

const ProductSectionList = props => {
  const {
    sections = [],
  } = props;

  return (
    <Fragment>
      { sections.map((section) =>
        <ProductSection {...section} />
      )}
    </Fragment>
  );
};

export default ProductSectionList;
