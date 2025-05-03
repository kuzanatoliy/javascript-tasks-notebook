module.exports = {
  getMaxPosition: (rooms) =>
    Math.min(...rooms.map((item) => item[0] + Math.floor((item[1] - 1) / 2))),
};
