function filterEvents(event) {
  return new Date(event.start_date) > new Date();
}

export default filterEvents;
