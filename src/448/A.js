module.exports = {
  isItPossibleToPutRewards: (cups, medals, shelves) =>
    Math.ceil(cups.reduce((sum, el) => sum + el) / 5) +
      Math.ceil(medals.reduce((sum, el) => sum + el) / 10) >
    shelves
      ? 'NO'
      : 'YES',
};
