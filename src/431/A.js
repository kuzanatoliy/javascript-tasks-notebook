module.exports = {
  getCountOfCalories: (colories, string) => {
    let count = 0;
    for (let t = 0; t < string.length; t++) {
      count += colories[string[t] - 1];
    }
    return count;
  },
};
