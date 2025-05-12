module.exports = {
  getPermutation: (num, k) => {
    const arr = new Array(num);
    let next = 1;

    for (let j = 0; j < k; j += 2) {
      for (let jj = j; jj < arr.length; jj += k) {
        arr[jj] = next;
        next++;
      }
    }

    const first = arr.length % 2 === 1 ? arr.length - 2 : arr.length - 1;

    for (let jjj = 0; jjj < k; jjj += 2) {
      for (let jjjj = first - jjj; jjjj >= 0; jjjj -= k) {
        arr[jjjj] = next;
        next++;
      }
    }

    return arr;
  },
};
