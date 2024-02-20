module.exports = {
  getPermutation: (number) => {
    if (number % 2 === 1) {
      return -1;
    }
    const res = [];
    for (let j = 1; j < number; j += 2) {
      res.push(j + 1);
      res.push(j);
    }
    return res;
  },
};
