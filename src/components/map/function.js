import data from "../listings/data.json";

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const generateCoordinates = () => {
  return data.listings.map((listing) => {
    return {
      id: listing.id,
      price: listing.costPerNight,
      longitude: getRandomNumber(-180, 180),
      latitude: getRandomNumber(-90, 90),
    };
  });
};
