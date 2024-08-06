module.exports = {
  getPermutation: (number) => {
    const res = [];
    for (let j = 1; j <= number; j += 2) {
      res.push(j);
      let next = j * 2;
      while (next <= number) {
        res.push(next);
        next *= 2;
      }
    }
    return [2, res];
  },
};
