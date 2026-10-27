module.exports = {
  buildMap: (num, k) => {
    const res = new Array(num).fill(k % 2 ? num : num - 1);
    res[num - 1] = num - 1;
    res[num - 2] = num;
    return res;
  },
};
