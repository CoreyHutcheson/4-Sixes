import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Banner from "src/components/banner";
import filterEvents from "src/utils/js/filterEvents";

const EventBanner = () => {
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

  return events.filter(filterEvents).map(({ node }) => (
    <Banner key={node.key} link="events">
      {node.content_short}
    </Banner>
  ));
};

export default EventBanner;
