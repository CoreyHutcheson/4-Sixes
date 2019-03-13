import React from "react";

import Carousel from "components/carousel";
import Services from "components/services";
import SaleBanner from "components/sale-banner";

const Home = () => (
  <div className="page-home">
    <SaleBanner />
    <Carousel />
    <Services />
  </div>
);

export default Home;
