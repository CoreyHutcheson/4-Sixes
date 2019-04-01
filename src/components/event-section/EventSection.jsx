import React from "react";

import filterEvents from "src/utils/js/filterEvents";
import Event from "./event";
import { useWordpressEvents } from "src/utils/js/customHooks";

const EventSection = () => {
  const events = useWordpressEvents();
  const futureEvents = events.filter(filterEvents);

  return futureEvents.map(({ node }) => (
    <Event
      key={node.wordpress_id}
      title={node.title}
      content={node.acf.content_full}
      start={node.acf.start_date}
      end={node.acf.end_date}
    />
  ));
};

export default EventSection;
