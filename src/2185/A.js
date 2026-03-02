module.exports = {
  getPerfectRoots: (num) => {
    let j = 0;
    const res = [];
    while (j < num) {
      j++;
      res.push(j);
    }
    return res;
  },
};
