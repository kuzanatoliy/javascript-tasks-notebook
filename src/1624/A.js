module.exports = {
  getCountOfOperations: (numbers) => {
    let [min] = numbers;
    let max = min;
    for (let ii = 1; ii < numbers.length; ii++) {
      if (min > numbers[ii]) {
        min = numbers[ii];
      }
      if (max < numbers[ii]) {
        max = numbers[ii];
      }
    }
    return max - min;
  },
};
