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

const createProductObject = ([name, img, type, desc]) => ({
  name,
  img,
  type,
  desc
});

/**
 * Array of objects
 * {name, img, type, desc}
 */
const productList = [
  // Grey Goose
  createProductObject([
    "Grey Goose",
    images["grey-goose"],
    "Vodka",
    "A Single-origin French vodka, traceable from field to bottle for a naturally rich and full-bodied taste."
  ]),
  // Jack Daniels
  createProductObject([
    "Jack Daniels",
    images["jack-daniels"],
    "Whiskey",
    "Known for its smooth, sweet and mild palate that opens with flavors of caramel, complemented by hints of spice, nuts and a touch of smoke"
  ]),
  // Amber Falls
  createProductObject([
    "Amber Falls",
    images["amber-falls"],
    "Wine",
    "Superb local wine from the vineyards in Hampshire, TN."
  ]),
  // Captain Morgan
  createProductObject([
    "Captain Morgan",
    images["captain-morgan"],
    "Rum",
    "To Life, Love and Loot."
  ]),
  // Balvenie
  createProductObject([
    "Balvenie",
    images["balvenie"],
    "Scotch",
    "A 12 year old single malt whisky which gains it's distinctive character from being matured in two wood types."
  ]),
  // Belle Meade
  createProductObject([
    "Belle Meade",
    images["belle-meade"],
    "Bourbon",
    "Prior to Prohibition, Belle Meade Bourbon was the choice of the discerning whiskey lover. The same is true today"
  ]),
  // Crown Royal Peach
  createProductObject([
    "Crown Royal Peach",
    images["crown-royal-peach"],
    "Whisky",
    "New Limited Edition. Bringing juicy sweetness to your summer season."
  ]),
  // Crystal Head Vodka
  createProductObject([
    "Crystal Head Vodka",
    images["crystal-head-vodka"],
    "Vodka",
    "Some of the smoothiest vodka in one of the slickest bottles!"
  ]),
  // Heavens Door
  createProductObject([
    "Heavens Door",
    images["heavens-door"],
    "Whiskey",
    "An award-winning collection of handcrafted American whiskey developed in partnership with Bob Dylan."
  ]),
  // Jack Daniels Gold
  createProductObject([
    "Jack Daniels Gold",
    images["jack-daniels-gold"],
    "Whiskey",
    "Crafted to the same uncompromising standards as Old No. 7, but then twice charcoal mellowed to be luxuriously smooth."
  ]),
  // Sangre de Vida
  createProductObject([
    "Sangre de Vida",
    images["vida-tequila-heart"],
    "Tequila",
    "Award winning, triple distilled, 100% blue webber agave tequila presented in a stunning anatomically correct glass heart bottle."
  ])
];

export default productList;
