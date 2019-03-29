import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./style.scss";

const FaqElement = ({ question, answer }) => (
  <li className="faq__field-container">
    <details>
      <summary className="faq__question">{question}</summary>
      <p className="faq__answer">{answer}</p>
    </details>
  </li>
);

const Faq = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      allFaqJson {
        edges {
          node {
            question
            answer
            key
          }
        }
      }
    }
  `).allFaqJson.edges;

  return (
    <>
      <h2>Event FAQ</h2>
      <ul className="faq">
        {data.map(({ node }) => (
          <FaqElement
            key={node.key}
            question={node.question}
            answer={node.answer}
          />
        ))}
      </ul>
    </>
  );
};

export default Faq;
