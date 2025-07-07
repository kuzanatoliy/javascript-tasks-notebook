module.exports = {
  getPermutation: (num) => {
    if (num === 1) {
      return [1];
    } else if (num % 2) {
      return [-1];
    } else {
      const res = [];
      for (let j = 0; j < num; j += 2) {
        res.push(j + 2);
        res.push(j + 1);
      }
      return res;
    }
  },
};
