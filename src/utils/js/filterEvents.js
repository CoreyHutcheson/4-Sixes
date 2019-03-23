function filterEvents({ node }) {
  return new Date(node.end_date) > new Date();
}

export default filterEvents;
