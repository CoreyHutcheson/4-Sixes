import React from "react";
import NavBar from "features/NavBar";
import Carousel from "features/Carousel";
import Services from "features/Services";

import "./style.scss";

const App = () => (
  <div className="page">
    <header>
      <NavBar />
      <Carousel />
    </header>
    <Services />
  </div>
);

export default App;
