import React from "react";
import PropTypes from "prop-types";

import Headroom from "react-headroom/dist";
import NavBar from "src/components/nav-bar";
import Footer from "src/components/footer";
import "./style.scss";

function PageWrapper({ children }) {
  return (
    <>
      <header>
        <Headroom>
          <NavBar />
        </Headroom>
      </header>
      {children}
      <Footer />
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.element,
};

export default PageWrapper;
