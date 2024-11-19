module.exports = {
  getPermutation: (num) => {
    const res = [];
    let first = 1;
    if (num % 2 === 1) {
      res.push(1);
      first++;
    }
    for (let jj = first; jj < num; jj += 2) {
      res.push(jj + 1);
      res.push(jj);
    }
    return res;
  },
};
