import React from "react";
import { graphql } from "gatsby";

import PageWrapper from "src/components/page-wrapper";
import Carousel from "src/components/carousel";
import Services from "src/components/services";
import Banner from "src/components/banner";
import filterEvents from "src/utils/js/filterEvents";

const Home = ({ data }) => {
  const events = data.allEventsJson.edges;
  const eventBanners = events.filter(filterEvents).map(e => (
    <Banner key={e.node.key} link="about">
      {e.node.content_short}
    </Banner>
  ));

  return (
    <PageWrapper>
      <div className="page-home">
        <Banner link="about">SAVE $! Check out our Sales!</Banner>
        {eventBanners}
        <Carousel />
        <Services />
      </div>
    </PageWrapper>
  );
};

export const query = graphql`
  query HomePageQuery {
    allEventsJson {
      edges {
        node {
          key
          end_date
          content_short
        }
      }
    }
  }
`;

export default Home;
