module.exports = {
  getIndexes: (numbers) =>
    numbers[0] + numbers[1] <= numbers[numbers.length - 1]
      ? [1, 2, numbers.length]
      : -1,
};
