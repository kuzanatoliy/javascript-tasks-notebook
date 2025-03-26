module.exports = {
  getCountOfMoney: (arr1, arr2, r) => {
    const min = Math.min(...arr1);
    const max = Math.max(...arr2);
    return max > min ? Math.floor(r / min) * max + (r % min) : r;
  },
};
