import React, { useState } from "react";

import "./style.scss";
import data from "./data.json";

const FaqElement = ({ question, answer }) => {
  const [isChecked, setChecked] = useState(true);

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => setChecked(!isChecked)}
        checked={isChecked}
      />
      <i />
      <h2>{question}</h2>
      <p>{answer}</p>
    </li>
  );
};

function Faq() {
  return (
    <ul>
      {data.faq.map(el => (
        <FaqElement question={el.question} answer={el.answer} />
      ))}
    </ul>
  );
}

export default Faq;
