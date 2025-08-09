module.exports = {
  getCountOfLeaves: (flowers) =>
    new Set(flowers.map((item) => `${item[0]}/${item[1]}`)).size,
};
