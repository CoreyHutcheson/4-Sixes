import { useStaticQuery, graphql } from "gatsby";

export const useWordpressFaqs = () => {
  const data = useStaticQuery(graphql`
    query WordpressFaqs {
      wordpressWpFaq(title: { eq: "Frequently Asked Questions" }) {
        acf {
          faqs {
            question
            answer
          }
        }
      }
    }
  `);

  return data.wordpressWpFaq.acf.faqs;
};
