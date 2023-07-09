import moment from "moment";

export const formatAvailableDates = (datesArray) => {
  const startDate = moment(datesArray[0]).format("MMM D");
  const endDate = moment(datesArray[datesArray.length - 1]).format("D");

  return `${startDate} - ${endDate}`;
};

export const readFromCache = () =>
  JSON.parse(localStorage.getItem("favourite")) || [];

export const writeToCache = (data) =>
  localStorage.setItem("favourite", JSON.stringify(data));
