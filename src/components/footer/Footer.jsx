import React from "react";
import { Link } from "gatsby";

import "./style.scss";

const Panel = ({ title, children }) => (
  <div className="footer__panel">
    <h3 className="footer__title">{title}</h3>
    <div className="footer__content">{children}</div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p className="footer__about-link">
      Visit the <Link to="/about/">About</Link> page for more information
    </p>

    <Panel title="location">
      <div className="footer__row">715 S Main St</div>
      <div className="footer__row">Mt Pleasant, TN 38474</div>
    </Panel>

    <Panel title="contact">
      <div className="footer__row">(931) 379-7371</div>
    </Panel>

    <Panel title="hours">
      <div className="footer__row">
        <span className="footer__days">Mon - Thur:</span>
        <span className="footer__time"> 8am - 10pm</span>
      </div>
      <div className="footer__row">
        <span className="footer__days">Fri - Sat:</span>
        <span className="footer__time"> 8am - 11pm</span>
      </div>
      <div className="footer__row">
        <span className="footer__days">Sun:</span>
        <span className="footer__time"> 10am - 7pm</span>
      </div>
    </Panel>
  </footer>
);

export default Footer;
