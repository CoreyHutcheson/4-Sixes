import amberFalls from "assets/images/products/amber-falls.png";
import captainMorgan from "assets/images/products/captain-morgan.jpeg";
import greyGoose from "assets/images/products/grey-goose.jpg";
import jackDaniels from "assets/images/products/jack-daniels.jpeg";

const productList = [
  {
    name: "Grey Goose",
    img: greyGoose,
    type: "Vodka",
    desc:
      "A Single-origin French vodka, traceable from field to bottle for a naturally rich and full-bodied taste."
  },
  {
    name: "Jack Daniels",
    img: jackDaniels,
    type: "Whiskey",
    desc:
      "Known for its smooth, sweet and mild palate that opens with flavors of caramel, complemented by hints of spice, nuts and a touch of smoke"
  },
  {
    name: "Amber Falls",
    img: amberFalls,
    type: "Wine",
    desc: "Superb local wine from the vineyards in Hampshire, TN."
  },
  {
    name: "Captain Morgan",
    img: captainMorgan,
    type: "Rum",
    desc: "To Life, Love and Loot."
  }
];

export default productList;
