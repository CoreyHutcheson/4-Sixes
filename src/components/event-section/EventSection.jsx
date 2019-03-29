import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import filterEvents from "src/utils/js/filterEvents";
import Event from "./event";

const EventSection = () => {
  const events = useStaticQuery(graphql`
    query EventsQuery {
      allEventsJson {
        edges {
          node {
            key
            start_date
            end_date
            title
            content_short
            content_full
          }
        }
      }
    }
  `).allEventsJson.edges;
  const futureEvents = events.filter(filterEvents);

  return futureEvents.map(({ node }) => (
    <Event key={node.key} title={node.title} content={node.content_full} />
  ));
};

export default EventSection;
