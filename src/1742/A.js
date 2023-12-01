module.exports = {
  checkIfOneIsSum: (numbers) =>
    numbers[0] === numbers[1] + numbers[2] ||
    numbers[1] === numbers[0] + numbers[2] ||
    numbers[2] === numbers[1] + numbers[0]
      ? 'YES'
      : 'NO',
};
