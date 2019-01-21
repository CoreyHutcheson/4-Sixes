import React from "react";

import Carousel from "features/Carousel";
import Services from "features/Services";
import GoogleMap from "features/GoogleMap";

const Home = () => (
  <div className="page-home">
    <Carousel />
    <Services />
    <GoogleMap />
  </div>
);

export default Home;
