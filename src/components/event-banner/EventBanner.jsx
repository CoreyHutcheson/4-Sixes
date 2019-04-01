import React from "react";

import Banner from "src/components/banner";
import filterEvents from "src/utils/js/filterEvents";
import { useWordpressEvents } from "src/utils/js/customHooks";

const EventBanner = () => {
  const events = useWordpressEvents();
  const futureEvents = events.filter(filterEvents);

  return futureEvents.map(({ node }) => (
    <Banner key={node.wordpress_id} link="events">
      {node.acf.content_short}
    </Banner>
  ));
};

export default EventBanner;
