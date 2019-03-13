import React from "react";

import productData from "./productData.js";
import "./style.scss";

const ProductPanel = () =>
  productData.map(product => {
    return (
      <div key={product.name} className="product">
        <img className="product__img" src={product.img} alt={product.name} />
        <div className="product__name">{product.name}</div>
        <div className="product__type">{product.type}</div>
        <div className="product__desc">
          <p>{product.desc}</p>
          <span>Description:</span>
        </div>
      </div>
    );
  });

export default ProductPanel;
