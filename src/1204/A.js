module.exports = {
  getCountOfMissedTrains: (map) =>
    Math.floor(map.length / 2) + (map.length % 2 && map.split('1').length > 2),
};
