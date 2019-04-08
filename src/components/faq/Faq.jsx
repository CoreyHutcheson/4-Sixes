import React from "react";

import { useWordpressFaqs } from "src/utils/js/custom-hooks/useWordpressFaqs";
import "./style.scss";

const FaqElement = ({ question, answer }) => (
  <li className="faq__field-container">
    <details>
      <summary className="faq__question">{question}</summary>
      {/* <p className="faq__answer">{answer}</p> */}
      <p classname="faq__answer" dangerouslySetInnerHTML={{ __html: answer }} />
    </details>
  </li>
);

const Faq = () => {
  const data = useWordpressFaqs();

  return (
    <section className="faq-container">
      <h2 className="faq-container__title">Event FAQ</h2>
      <ul className="faq">
        {data.map((el, index) => (
          <FaqElement key={index} question={el.question} answer={el.answer} />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
