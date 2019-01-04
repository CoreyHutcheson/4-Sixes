import React from "react";
import Service from "features/Services/Service";
import "./style.scss";

function Services() {
  const services = [
    {
      key: "Products",
      num: 1,
      title: "Products",
      desc: "Product Description"
    },
    {
      key: "About",
      num: 2,
      title: "About",
      desc: "About Description"
    },
    {
      key: "Contact",
      num: 3,
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
