import React from "react";

import PageWrapper from "src/components/page-wrapper";
import Carousel from "src/components/carousel";
import Services from "src/components/services";
import Banner from "src/components/banner";
import EventBanner from "src/components/event-banner";

const Home = () => {
  return (
    <PageWrapper>
      <div className="page-content page-home">
        <Banner link="events">SAVE $! Check out our Sales!</Banner>
        <EventBanner />
        <Carousel />
        <Services />
      </div>
    </PageWrapper>
  );
};

export default Home;
