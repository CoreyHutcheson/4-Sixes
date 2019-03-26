import React from "react";

import PageWrapper from "src/components/page-wrapper";
import FAQ from "src/components/faq";
import "src/utils/scss/page-styles/events.scss";

const EventsPage = () => {
  return (
    <PageWrapper>
      <div className="page-content page-events">
        <FAQ />
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
