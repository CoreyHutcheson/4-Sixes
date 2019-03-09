import React from "react";
import { Switch, Route } from "react-router-dom";

// Components needed on every page (src/features)
import Headroom from "react-headroom/dist";
import NavBar from "components/nav-bar";
import Footer from "components/footer";

// Routes (src/routes)
import Home from "routes/home";
import Products from "routes/products";
import About from "routes/about";
import History from "routes/history";

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
      <Route path="/history" component={History} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer />
  </div>
);

export default App;
