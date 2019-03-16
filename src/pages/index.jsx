import React from "react";

import PageWrapper from "src/components/page-wrapper";
import Carousel from "src/components/carousel";
import Services from "src/components/services";
import SaleBanner from "src/components/sale-banner";

const Home = () => (
  <PageWrapper>
    <div className="page-home">
      <SaleBanner />
      <Carousel />
      <Services />
    </div>
  </PageWrapper>
);

export default Home;
