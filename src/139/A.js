module.exports = {
  getLastDay: (count, limits) => {
    let curr = -1;
    while (count > 0) {
      curr = (curr + 1) % 7;
      count -= limits[curr];
    }
    return curr + 1;
  },
};
