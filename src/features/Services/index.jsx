import React from "react";
import Service from "features/Services/Service";
import "./style.scss";

function Services() {
  const services = [
    {
      key: "History",
      title: "History",
      desc:
        "It was all in the cards! Discover the story behind your favorite liquor store."
    },
    {
      key: "Products",
      title: "Products",
      desc:
        "What's new? What's trending? What are you buying later? Find out here!"
    },
    {
      key: "About",
      title: "About",
      desc: "Want to contact us? Can't find the store? Well here's how!"
    }
  ];

  return (
    <div className="services">
      {services.map(item => (
        <Service key={item.key} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}

export default Services;
