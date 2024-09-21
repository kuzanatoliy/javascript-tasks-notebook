module.exports = {
  getMaxBeauty: (arr) => {
    arr.sort((a, b) => Number(a - b));
    const c1 = arr[0] * arr[1];
    const c2 = arr[arr.length - 1] * arr[arr.length - 2];
    return c2 > c1 ? c2 : c1;
  },
};
