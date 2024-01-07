module.exports = {
  getMaximumNumberOfCandies: (numbers) =>
    (BigInt(numbers[0]) + BigInt(numbers[1]) + BigInt(numbers[2])) / 2n,
};
