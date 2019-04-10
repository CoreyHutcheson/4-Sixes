import React from "react";

import PageWrapper from "src/components/page-wrapper";
import DrinkCalculator from "src/components/drink-calculator";
import "src/utils/styles/page-styles/drink-calculator.scss";

const Home = () => {
  return (
    <PageWrapper>
      <div className="page-content page-drink-calculator">
        <h2>Drink Calculator</h2>
        <p>
          Planning an event? Let us help you decide how much you need to buy!
        </p>
        <DrinkCalculator />
      </div>
    </PageWrapper>
  );
};

export default Home;
