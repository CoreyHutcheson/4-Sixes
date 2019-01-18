import React from "react";

import Headroom from "react-headroom/dist";
import NavBar from "features/NavBar";
import Carousel from "features/Carousel";
import Services from "features/Services";

import "./style.scss";

const App = () => (
  <div>
    <header>
      <Headroom>
        <NavBar />
      </Headroom>
    </header>
    <Carousel />
    <Services />
  </div>
);

export default App;
