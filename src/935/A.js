module.exports = {
  getNumberOfEmployees: (number) => {
    let count = 0;
    for (let j = 1; j <= number / 2; j++) {
      if (number % j === 0) {
        count++;
      }
    }
    return count;
  },
};
