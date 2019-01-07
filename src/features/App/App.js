import React from "react";
import Headroom from "react-headroom/dist";
import NavBar from "features/NavBar";
import Carousel from "features/Carousel";
import Services from "features/Services";

import "./style.scss";

const App = () => (
  <div className="page">
    <header>
      <Headroom>
        <NavBar />
      </Headroom>
      <Carousel />
    </header>
    <Services />
  </div>
);

export default App;
