function filterEvents({ node }) {
  return new Date(node.start_date) > new Date();
}

export default filterEvents;
