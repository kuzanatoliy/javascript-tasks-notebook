module.exports = {
  getPermutation: (num) => {
    if (num % 2 === 0) {
      return [-1];
    }
    const arr = new Array(num).fill(0).map((_, ind) => ind);
    arr[0] = num;
    return arr;
  },
};
