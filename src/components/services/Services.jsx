import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Service from "./service";
import "./style.scss";

function Services() {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allServicesJson {
        edges {
          node {
            key
            title
            desc
          }
        }
      }
    }
  `).allServicesJson.edges;

  return (
    <div className="services">
      {data.map(({ node }) => (
        <Service key={node.key} title={node.title} desc={node.desc} />
      ))}
    </div>
  );
}

export default Services;
