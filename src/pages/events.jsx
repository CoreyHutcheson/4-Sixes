import React from "react";

import PageWrapper from "src/components/page-wrapper";
import FAQ from "src/components/faq";
import EventSection from "src/components/event-section";

import "src/utils/scss/page-styles/events.scss";

const EventsPage = ({ data }) => {
  return (
    <PageWrapper>
      <div className="page-content page-events">
        <EventSection />
        <FAQ />
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
