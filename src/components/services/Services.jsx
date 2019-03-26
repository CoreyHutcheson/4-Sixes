import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Panel from "./panel";
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
        <Panel key={node.key} title={node.title} desc={node.desc} />
      ))}
    </div>
  );
}

export default Services;
