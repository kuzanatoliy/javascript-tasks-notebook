module.exports = {
  getCountOfToasts: (...numbers) =>
    Math.min(
      Math.floor((numbers[1] * numbers[2]) / (numbers[0] * numbers[6])),
      Math.floor((numbers[3] * numbers[4]) / numbers[0]),
      Math.floor(numbers[5] / (numbers[0] * numbers[7]))
    ),
};
