import { useStaticQuery, graphql } from "gatsby";

export const useWordpressProducts = () => {
  const data = useStaticQuery(graphql`
    query WordpressProducts {
      allWordpressWpProducts {
        edges {
          node {
            id
            title
            acf {
              type
              description
              new_product
              image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allWordpressWpProducts.edges;
};
