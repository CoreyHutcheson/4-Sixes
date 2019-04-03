import React from "react";

import { useWordpressProducts } from "src/utils/js/custom-hooks/useWordpressProducts";
import Img from "gatsby-image";

import "./style.scss";

const ProductPanel = ({ newProducts }) => {
  const data = useWordpressProducts();

  const products = data.filter(({ node }) => {
    return node.acf.new_product === newProducts;
  });

  return products.map(({ node }) => {
    return (
      <div key={node.id} className="product">
        <Img
          className="product__img"
          fluid={node.acf.image.localFile.childImageSharp.fluid}
          alt={node.title}
        />
        <div className="product__name">{node.title}</div>
        <div className="product__type">{node.acf.type}</div>
        <div className="product__desc">
          <p>{node.acf.description}</p>
          <span>Description:</span>
        </div>
      </div>
    );
  });
};

export default ProductPanel;
