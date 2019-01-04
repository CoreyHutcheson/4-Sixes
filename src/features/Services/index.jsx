import React from "react";
import Service from "features/Services/Service";
import "./style.scss";

function Services() {
  return (
    <div className="services">
      <Service num={1} title="New Products" desc="This is a description" />
      <Service num={2} title="About" desc="About Description" />
      <Service num={3} title="Contact" desc="Contact Description" />
    </div>
  );
}

export default Services;
