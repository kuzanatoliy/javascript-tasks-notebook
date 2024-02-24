module.exports = {
  getCountOfNumbers: (numbers) => {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
      sum += numbers[j];
    }
    sum -= numbers.length;
    return sum < 0 ? 1 : sum;
  },
};
