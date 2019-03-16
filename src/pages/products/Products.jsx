import React from "react";

import ProductPanel from "components/product-panel";
import "./products.scss";

const Products = () => (
  <div className="page-products">
    <div className="page-products__products-grid">
      <ProductPanel />
    </div>
    <div className="page-products__more">Plus More!</div>
  </div>
);

export default Products;