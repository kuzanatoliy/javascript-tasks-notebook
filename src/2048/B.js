module.exports = {
  getPermutation: (num, k) => {
    const arr = new Array(num).fill(0);
    let next = 1;
    for (let j = k - 1; j >= 0; j--) {
      for (let jj = j; jj < arr.length; jj += k) {
        arr[jj] = next;
        next++;
      }
    }
    return arr;
  },
};
