module.exports = {
  getMinNumberOfSteps: (numbers) => {
    const tab = numbers[0] * 2 - 1;
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
      count += Math.ceil(numbers[j] / tab) - 1;
    }
    return count;
  },
};
