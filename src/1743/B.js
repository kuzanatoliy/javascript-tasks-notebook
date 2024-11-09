module.exports = {
  getPermutation: (num) => {
    const arr = Array(num);
    for (let j = 0; j < num; j += 2) {
      arr[j] = j / 2 + 1;
    }
    for (let jj = 1; jj < num; jj += 2) {
      arr[jj] = num - Math.floor(jj / 2);
    }
    return arr;
  },
};
