import React from "react";

import PageWrapper from "src/components/page-wrapper";
import HistoryPanel from "src/components/history-panel";
import cards from "src/assets/images/history/cards[sketch-1000x500].jpg";
import board from "src/assets/images/history/board[sketch-1000x500].jpg";
import sign from "src/assets/images/history/sign[sketch-1000x500].jpg";

import "src/utils/styles/page-styles/history.scss";

const History = () => (
  <PageWrapper>
    <div className="page-content page-history">
      <HistoryPanel
        img={cards}
        altText="Pocket sixes cards."
        text="This store was won in a poker hand right? Similar statements are often heard, so here's a brief history of the origins of the store."
      />
      <HistoryPanel
        img={board}
        altText="Board showing two sixes to make quad sixes."
        text="James 'Tennessee Longoodie' Roy was a road gambler, famous for his No Limit poker playing skills. He is routinely mentioned in circles among poker legends, such as Doyle Brunson, Amarillo Slim, and Johnny Moss."
      />
      <HistoryPanel
        img={sign}
        altText="Four sixes sign outside of store."
        text="James Roy could often be found traveling the country playing in some of the highest stakes games offered, and winning handily. Undoubtedly a hand that stood out to James Roy was one in which he scooped the pot with quad sixes (4 sixes) winning money which would go on to help him open this beloved liquor store, and spawn the legend that is still touted to this day!"
      />
    </div>
  </PageWrapper>
);

export default History;
