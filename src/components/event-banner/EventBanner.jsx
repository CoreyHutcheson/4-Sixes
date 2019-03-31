import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Banner from "src/components/banner";
import filterEvents from "src/utils/js/filterEvents";

const EventBanner = () => {
  const events = useStaticQuery(graphql`
    query AllEvents {
      allWordpressWpEvents {
        edges {
          node {
            wordpress_id
            title
            acf {
              start_date
              end_date
              content_short
              content_full
            }
          }
        }
      }
    }
  `).allWordpressWpEvents.edges;
  console.log(events);

  return events.filter(filterEvents).map(({ node }) => (
    <Banner key={node.wordpress_id} link="events">
      {node.acf.content_short}
    </Banner>
  ));
};

export default EventBanner;
