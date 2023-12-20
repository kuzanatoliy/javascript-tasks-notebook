module.exports = {
  getMaxInteger: (...numbers) => {
    const temp = numbers[2] - (numbers[2] % numbers[0]) + numbers[1];
    if (temp <= numbers[2]) {
      return temp;
    }
    return numbers[2] - (numbers[2] % numbers[0]) - (numbers[0] - numbers[1]);
  },
};
