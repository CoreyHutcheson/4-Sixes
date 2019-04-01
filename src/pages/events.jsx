import React from "react";

import PageWrapper from "src/components/page-wrapper";
import FAQ from "src/components/faq";
import EventSection from "src/components/event-section";
import WineDiscount from "src/components/wine-discount";

import "src/utils/scss/page-styles/events.scss";

const EventsPage = () => {
  return (
    <PageWrapper>
      <div className="page-content page-events">
        <EventSection />
        <WineDiscount />
        <FAQ />
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
