import React from "react";

import "./style.scss";
import data from "./data.json";

const FaqElement = ({ question, answer }) => (
  <li className="faq__field-container">
    <details>
      <summary className="faq__question">{question}</summary>
      <p className="faq__answer">{answer}</p>
    </details>
  </li>
);

function Faq() {
  return (
    <>
      <h2>Event FAQ</h2>
      <ul className="faq">
        {data.faq.map(el => (
          <FaqElement key={el.key} question={el.question} answer={el.answer} />
        ))}
      </ul>
    </>
  );
}

export default Faq;
