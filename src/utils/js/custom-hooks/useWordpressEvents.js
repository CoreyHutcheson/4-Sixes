import { useStaticQuery, graphql } from "gatsby";

export const useWordpressEvents = () => {
  const data = useStaticQuery(graphql`
    query WordpressEvents {
      allWordpressWpEvents {
        edges {
          node {
            wordpress_id
            title
            acf {
              start_date
              end_date
              content_short
              content_full
            }
          }
        }
      }
    }
  `);

  return data.allWordpressWpEvents.edges;
};
