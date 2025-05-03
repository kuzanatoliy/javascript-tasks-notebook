module.exports = {
  getPermutation: (num, m, k) => {
    const arr = new Array(num).fill(0).map((_, ind) => num - ind);
    let d = Math.min(num - (num - k + 1), m);
    for (let j = arr.length - 1; j >= 0 && d; j--) {
      arr[j] = d;
      d--;
    }
    return arr;
  },
};
