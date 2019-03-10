/**
 * Returns object of all assets in specified folder
 */
function importAll(r) {
  let images = {};
  const removeFileExtension = str => str.replace(/\.\w+$/, "");

  r.keys().map(
    (item, index) =>
      (images[removeFileExtension(item.replace("./", ""))] = r(item))
  );

  return images;
}

/**
 * All images in 'assets/images/products' folder
 * Images can be accesses via "images['key-name']"
 * Example: images['amber-falls']
 */
const images = importAll(
  require.context("assets/images/products", false, /\.(png|jpe?g|svg)$/)
);

/**
 * Array of objects
 * {name, img, type, desc}
 */
const productList = [
  {
    name: "Grey Goose",
    img: images["grey-goose"],
    type: "Vodka",
    desc:
      "A Single-origin French vodka, traceable from field to bottle for a naturally rich and full-bodied taste."
  },
  {
    name: "Jack Daniels",
    img: images["jack-daniels"],
    type: "Whiskey",
    desc:
      "Known for its smooth, sweet and mild palate that opens with flavors of caramel, complemented by hints of spice, nuts and a touch of smoke"
  },
  {
    name: "Amber Falls",
    img: images["amber-falls"],
    type: "Wine",
    desc: "Superb local wine from the vineyards in Hampshire, TN."
  },
  {
    name: "Captain Morgan",
    img: images["captain-morgan"],
    type: "Rum",
    desc: "To Life, Love and Loot."
  },
  {
    name: "Balvenie",
    img: images["balvenie"],
    type: "Scotch",
    desc:
      "A 12 year old single malt whisky which gains it's distinctive character from being matured in two wood types."
  },
  {
    name: "Belle Meade",
    img: images["belle-meade"],
    type: "Bourbon",
    desc:
      "Prior to Prohibition, Belle Meade Bourbon was the choice of the discerning whiskey lover. The same is true today"
  },
  {
    name: "Crown Royal Peach",
    img: images["crown-royal-peach"],
    type: "Whisky",
    desc: "New Limited Edition. Bringing juicy sweetness to your summer season."
  },
  {
    name: "Crystal Head Vodka",
    img: images["crystal-head-vodka"],
    type: "Vodka",
    desc: "Some of the smoothiest vodka in one of the slickest bottles!"
  },
  {
    name: "Heavens Door",
    img: images["heavens-door"],
    type: "Whiskey",
    desc:
      "An award-winning collection of handcrafted American whiskey developed in partnership with Bob Dylan."
  },
  {
    name: "Jack Daniels Gold",
    img: images["jack-daniels-gold"],
    type: "Whiskey",
    desc:
      "Crafted to the same uncompromising standards as Old No. 7, but then twice charcoal mellowed to be luxuriously smooth."
  },
  {
    name: "Sangre de Vida",
    img: images["vida-tequila-heart"],
    type: "Tequila",
    desc:
      "Award winning, triple distilled, 100% blue webber agave tequila presented in a stunning anatomically correct glass heart bottle."
  }
];

export default productList;
