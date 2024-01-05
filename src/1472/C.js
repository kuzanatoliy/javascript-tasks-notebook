module.exports = {
  getMaxScore: (numbers) => {
    let max = 0;
    const temp = [];
    for (let j = numbers.length - 1; j >= 0; j--) {
      temp[j] = numbers[j] + (temp[j + numbers[j]] || 0);
      if (temp[j] > max) {
        max = temp[j];
      }
    }
    return max;
  },
};
