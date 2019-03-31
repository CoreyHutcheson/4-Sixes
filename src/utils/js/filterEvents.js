function filterEvents({ node }) {
  return new Date(node.acf.end_date) > new Date();
}

export default filterEvents;
