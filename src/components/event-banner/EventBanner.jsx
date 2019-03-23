import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Banner from "src/components/banner";
import filterEvents from "src/utils/js/filterEvents";

function EventBanner({}) {
  const events = useStaticQuery(graphql`
    query HomePageQuery {
      allEventsJson {
        edges {
          node {
            key
            end_date
            content_short
          }
        }
      }
    }
  `).allEventsJson.edges;

  return events.filter(filterEvents).map(e => (
    <Banner key={e.node.key} link="about">
      {e.node.content_short}
    </Banner>
  ));
}

export default EventBanner;
