module.exports = {
  getCountOfPermutations: (num) => {
    num *= 2;
    let count = 1;
    while (num > 2) {
      count = (count * num) % 1000000007;
      num--;
    }
    return count;
  },
};
