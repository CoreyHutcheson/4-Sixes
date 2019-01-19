import React from "react";
import { Switch, Route } from "react-router-dom";

// Components needed on every page (src/features)
import Headroom from "react-headroom/dist";
import NavBar from "features/NavBar";
import Footer from "features/Footer";

// Routes (src/routes)
import Home from "routes/Home";
import Products from "routes/Products";
import About from "routes/About";
import Contact from "routes/Contact";

import "./style.scss";

const App = () => (
  <div>
    <header>
      <Headroom>
        <NavBar />
      </Headroom>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </div>
);

export default App;
