module.exports = {
  checkCount: (height, people) =>
    people.reduce((prev, curr) => (curr > height ? 2 : 1) + prev, 0),
};
