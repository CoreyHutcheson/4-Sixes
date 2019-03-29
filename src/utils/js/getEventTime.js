const getEventTime = (start, end) => {
  var startOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  var endOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const startDate = new Date(start).toLocaleDateString("en-US", startOptions);
  const endDate = new Date(end).toLocaleTimeString("en-US", endOptions);

  return `${startDate} \u2013 ${endDate}`;
};

export default getEventTime;
