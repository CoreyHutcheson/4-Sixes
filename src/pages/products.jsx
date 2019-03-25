import React from "react";

import PageWrapper from "src/components/page-wrapper";
import ProductPanel from "src/components/product-panel";
import "src/utils/scss/page-styles/products.scss";

const Products = () => (
  <PageWrapper>
    <div className="page-content page-products">
      <div className="page-products__header">New</div>
      <div className="page-products__products-grid page-products__new-products">
        <ProductPanel newProducts={true} />
      </div>

      <div className="page-products__header">Products</div>
      <div className="page-products__products-grid">
        <ProductPanel newProducts={false} />
      </div>

      <div className="page-products__more">Plus More!</div>
    </div>
  </PageWrapper>
);

export default Products;
