const map = {
  captain: 4,
  child: 2,
  man: 3,
  rat: 1,
  woman: 2,
};

module.exports = {
  getOrder: (people) =>
    people
      .map((item) => [item[0], map[item[1]]])
      .sort((a, b) => a[1] - b[1])
      .map((item) => item[0]),
};
