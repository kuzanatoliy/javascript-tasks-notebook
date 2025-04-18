module.exports = {
  getCodePhoneLength: (numbers) => {
    let count = 0;
    for (let j = 0; j < numbers[0].length; j++) {
      for (let jj = 1; jj < numbers.length; jj++) {
        if (numbers[jj][j] !== numbers[jj - 1][j]) {
          return count;
        }
      }
      count++;
    }
    return count;
  },
};
