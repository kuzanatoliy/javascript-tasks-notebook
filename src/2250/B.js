module.exports = {
  buildString: (num, k) => {
    if (num - k <= 1) {
      return -1;
    }
    const d1 = Math.ceil(k / 2);
    const d2 = Math.floor(k / 2);
    const res = [...new Array(d2 + 1).fill(0), ...new Array(d1 + 1).fill(1)];
    for (let j = k + 2; j < num; j += 2) {
      res[j] = 0;
      res[j + 1] = 1;
    }
    res.length = num;
    return res.join('');
  },
};
