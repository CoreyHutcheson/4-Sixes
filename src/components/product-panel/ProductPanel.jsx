import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./style.scss";

const ProductPanel = ({ newProducts }) => {
  const data = useStaticQuery(graphql`
    query ProductQuery {
      allProductsJson {
        edges {
          node {
            key
            name
            type
            desc
            newProduct
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `).allProductsJson.edges;

  const products = data.filter(({ node }) => node.newProduct === newProducts);

  return products.map(({ node }) => {
    return (
      <div key={node.key} className="product">
        <Img
          className="product__img"
          fluid={node.img.childImageSharp.fluid}
          alt={node.name}
        />
        <div className="product__name">{node.name}</div>
        <div className="product__type">{node.type}</div>
        <div className="product__desc">
          <p>{node.desc}</p>
          <span>Description:</span>
        </div>
      </div>
    );
  });
};

export default ProductPanel;
