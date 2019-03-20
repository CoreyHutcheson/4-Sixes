import React from "react";

import "./style.scss";
import data from "./data.json";

function Faq() {
  return (
    <ul>
      {data.faq.map(el => (
        <li>
          <input type="checkbox" checked />
          <i />
          <h2>{el.question}</h2>
          <p>{el.answer}</p>
        </li>
      ))}
    </ul>
  );
}

export default Faq;
