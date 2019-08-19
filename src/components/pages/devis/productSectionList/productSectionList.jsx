import React, { Fragment } from 'react';
import ProductSection from '../productSection/productSection';

const ProductSectionList = props => {
  const {
    lots = [],
  } = props;

  return (
    <Fragment>
      { lots.map((item) =>
        <ProductSection {...item} />
      )}
    </Fragment>
  );
};

export default ProductSectionList;
