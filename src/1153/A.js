module.exports = {
  getBusNumber: (buses, t) =>
    buses
      .map((item, ind) => [
        item[0] >= t
          ? item[0] - t
          : item[1] - ((t - item[0]) % item[1] || item[1]),
        ind,
      ])
      .sort((a, b) => a[0] - b[0])[0][1] + 1,
};
