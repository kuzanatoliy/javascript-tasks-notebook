module.exports = {
  getPermutation: (num) => {
    const res = new Array(num * 3).fill(0);
    for (let j = 0; j < num; j++) {
      res[j * 3] = j + 1;
    }
    let curr = num;
    for (let jj = 0; jj < num; jj++) {
      res[jj * 3 + 1] = ++curr;
      res[jj * 3 + 2] = ++curr;
    }
    return res;
  },
};
