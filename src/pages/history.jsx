import React from "react";

import PageWrapper from "src/components/page-wrapper";
import HistoryPanel from "src/components/history-panel";
import cards from "src/assets/images/history/cards[sketch-1000x500].jpg";
import board from "src/assets/images/history/board[sketch-1000x500].jpg";
import sign from "src/assets/images/history/sign[sketch-1000x500].jpg";

import "src/utils/scss/page-styles/history.scss";

const History = () => (
  <PageWrapper>
    <div className="page-content page-history">
      <HistoryPanel
        img={cards}
        altText="Pocket sixes cards."
        text="Card Text Lorem ipsum dolor"
      />
      <HistoryPanel
        img={board}
        altText="Board showing two sixes to make quad sixes."
        text="Board Text Lorem ipsum dolor sit"
      />
      <HistoryPanel
        img={sign}
        altText="Four sixes sign outside of store."
        text="Sign Text Lorem ipsum dolor sit amet"
      />
    </div>
  </PageWrapper>
);

export default History;
