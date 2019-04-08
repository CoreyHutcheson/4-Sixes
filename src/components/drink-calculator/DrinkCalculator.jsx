import React, { useState, useEffect } from "react";

import "./style.scss";

const Input = ({ header, label, name, value, handleChange }) => {
  return (
    <div className="input-container">
      <div className="input-container__header">{header}</div>
      <div>
        <input
          className="input-container__input"
          type="number"
          id={name}
          value={value}
          onChange={handleChange}
        />
        <label className="input-container__label" htmlFor={name}>
          {label}
        </label>
      </div>
    </div>
  );
};

const CheckboxSelection = ({ categories, handleChange }) => {
  return (
    <div className="input-container">
      <div className="input-container__header">Serving</div>
      <div className="input-container__choice-container">
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="beer"
            checked={categories.beer}
            onChange={handleChange}
          />
          <label htmlFor="beer">Beer</label>
        </div>
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="wine"
            checked={categories.wine}
            onChange={handleChange}
          />
          <label htmlFor="wine">Wine</label>
        </div>
        <div className="input-container__choice">
          <input
            type="checkbox"
            id="liquor"
            checked={categories.liquor}
            onChange={handleChange}
          />
          <label htmlFor="liquor">Liquor</label>
        </div>
      </div>
    </div>
  );
};

const getDrinks = (visitors, duration) => {
  return 2 * visitors + visitors * (duration - 1);
};

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
      <form className="drink-form-container">
        <Input
          header="Guest Count"
          label="Guests"
          name="visitors"
          value={visitors}
          handleChange={e => setVisitors(+e.target.value)}
        />
        <Input
          header="Party Duration"
          label="Hours"
          name="duration"
          value={duration}
          handleChange={e => setDuration(+e.target.value)}
        />
        <CheckboxSelection
          categories={categories}
          handleChange={handleCategoryChange}
        />
      </form>

      <div className="drink-calculator__output">
        <div className="output">
          <div>{beerAmount}</div>
          <div>Bottles/Cans of Beer</div>
        </div>
        <div className="output">
          <div>{wineAmount}</div>
          <div>Bottles of Wine (750ml)</div>
        </div>
        <div className="output">
          <div>{liquorAmount}</div>
          <div>Bottles of Liquor (750ml)</div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCalculator;
