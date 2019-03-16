import React from "react";

import PageWrapper from "src/components/page-wrapper";
import ProductPanel from "src/components/product-panel";
import "src/utils/scss/page-styles/products.scss";

const Products = () => (
  <PageWrapper>
    <div className="page-products">
      <div className="page-products__products-grid">
        <ProductPanel />
      </div>
      <div className="page-products__more">Plus More!</div>
    </div>
  </PageWrapper>
);

export default Products;
