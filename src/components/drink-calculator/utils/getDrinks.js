const getDrinks = (visitors, duration) => {
  return 2 * visitors + visitors * (duration - 1);
};

export default getDrinks;
