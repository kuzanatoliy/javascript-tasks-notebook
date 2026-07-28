module.exports = {
  getHappyNumbersCount: (num) => {
    let next = 2;
    let count = 0;
    while (num) {
      count += next;
      next *= 2;
      num--;
    }
    return count;
  },
};
