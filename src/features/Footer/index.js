import React from "react";

import "./style.scss";

const Panel = ({ title, children }) => (
  <div className="footer__panel">
    <p className="footer__title">{title}</p>
    <span className="footer__content">{children}</span>
  </div>
);

const Footer = () => (
  <div className="footer">
    <Panel title="location">
      <p>715 S Main St</p>
      <p>Mt Pleasant, TN 38474</p>
    </Panel>

    <Panel title="contact">
      <p>(931) 379-7371</p>
    </Panel>

    <Panel title="hours">
      <p>
        <span>Mon - Thur:</span>
        <span> 8am - 10pm</span>
      </p>
      <p>
        <span>Fri - Sat:</span>
        <span> 8 - 11pm</span>
      </p>
      <p>
        <span>Sun:</span>
        <span> 10am - 7pm</span>
      </p>
    </Panel>
  </div>
);

export default Footer;
