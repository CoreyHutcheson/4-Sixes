import React from "react";

import PageWrapper from "src/components/page-wrapper";
import cards from "src/assets/images/history/cards[sketch-1000x500].jpg";
import board from "src/assets/images/history/board[sketch-1000x500].jpg";
import sign from "src/assets/images/history/sign[sketch-1000x500].jpg";

import "src/utils/scss/page-styles/history.scss";

const History = () => (
  <PageWrapper>
    <div className="page-history">
      <div className="page-history__img-container">
        <img src={cards} alt="Pocket sixes cards." />
      </div>

      <p className="page-history__text">
        Card Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
        error magni ipsa sed necessitatibus repellendus hic aspernatur! At nemo,
        error provident eveniet dolores adipisci officia, fugiat dolore
        accusamus suscipit eligendi.
      </p>

      <div className="page-history__img-container page-history__board">
        <img src={board} alt="Board showing two sixes to make quad sixes." />
      </div>

      <p className="page-history__text">
        Board Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis iusto soluta libero nihil totam quae sapiente exercitationem
        delectus ad repudiandae vero, ratione, fugiat nulla aperiam iure aut
        deserunt quasi assumenda!
      </p>

      <div className="page-history__img-container">
        <img src={sign} alt="Four sixes sign outside of store." />
      </div>

      <p className="page-history__text">
        Sign Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis nulla officia odit a ea, minus blanditiis voluptate dolor
        molestias. Blanditiis error ex ipsam quo praesentium officia voluptatem
        illum veniam est.
      </p>
    </div>
  </PageWrapper>
);

export default History;
