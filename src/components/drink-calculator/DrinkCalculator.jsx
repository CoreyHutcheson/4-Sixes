import React, { useState, useEffect } from "react";

import "./style.scss";
import getDrinks from "./utils/getDrinks";
import Input from "./input";
import CheckboxSelection from "./checkbox-selection";
import DrinkOutputPanel from "./drink-output-panel";

const DrinkCalculator = () => {
  const [visitors, setVisitors] = useState(10);
  const [duration, setDuration] = useState(5);
  const [categories, setCategories] = useState({
    beer: true,
    wine: true,
    liquor: true,
  });
  const [drinks, setDrinks] = useState(getDrinks(visitors, duration));
  const [wineAmount, setWineAmount] = useState(0);
  const [beerAmount, setBeerAmount] = useState(0);
  const [liquorAmount, setLiquorAmount] = useState(0);
  const multiplier = {
    "1": 1,
    "2": 0.5,
    "3": 0.33,
    "0": 0,
  };

  const handleCategoryChange = e => {
    setCategories(prev => {
      return { ...prev, [e.target.id]: e.target.checked };
    });
  };

  const setCategoryAmounts = multiplier => {
    let amount = drinks * multiplier;
    let beerAmount = amount;
    let wineAmount = amount / 5;
    let liquorAmount = amount / 16;

    const adjustAmount = (category, amount, callback) => {
      if (categories[category]) {
        callback(Math.ceil(amount));
      } else {
        callback(0);
      }
    };

    adjustAmount("beer", beerAmount, setBeerAmount);
    adjustAmount("wine", wineAmount, setWineAmount);
    adjustAmount("liquor", liquorAmount, setLiquorAmount);
  };

  useEffect(() => {
    setDrinks(getDrinks(visitors, duration));

    let numberOfSelectedCategories = Object.keys(categories).filter(
      el => categories[el]
    ).length;

    setCategoryAmounts(multiplier[numberOfSelectedCategories]);
  });

  return (
    <div className="drink-calculator">
      <form className="drink-calculator__form">
        <Input
          header="Guest Count"
          label="Guests"
          name="visitors"
          value={visitors}
          increaseFunc={() => setVisitors(prev => prev + 1)}
          decreaseFunc={() => setVisitors(prev => prev - 1)}
          handleChange={e => setVisitors(+e.target.value)}
        />
        <Input
          header="Party Duration"
          label="Hours"
          name="duration"
          value={duration}
          increaseFunc={() => setDuration(prev => prev + 1)}
          decreaseFunc={() => setDuration(prev => prev - 1)}
          handleChange={e => setDuration(+e.target.value)}
        />
        <CheckboxSelection
          categories={categories}
          handleChange={handleCategoryChange}
        />
      </form>

      <div className="drink-calculator__output output">
        <DrinkOutputPanel count={beerAmount} text="Bottles/Cans of Beer" />
        <DrinkOutputPanel count={wineAmount} text="Bottles of Wine (750ml)" />
        <DrinkOutputPanel
          count={liquorAmount}
          text="Bottles of Liquor (750ml)"
        />
      </div>
    </div>
  );
};

export default DrinkCalculator;
