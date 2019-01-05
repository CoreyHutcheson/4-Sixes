import React from "react";
import Service from "features/Services/Service";
import "./style.scss";

function Services() {
  const services = [
    {
      key: "About",
      title: "About",
      desc: "About Description"
    },
    {
      key: "Products",
      title: "Products",
      desc: "Product Description"
    },
    {
      key: "Contact",
      title: "Contact",
      desc: "Contact Description"
    }
  ];

  return (
    <div className="services">
      {services.map(item => (
        <Service
          key={item.key}
          num={item.num}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default Services;
