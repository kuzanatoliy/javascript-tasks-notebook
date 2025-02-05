module.exports = {
  getMinCountOfFlashes: (m, array) => {
    const arr = array.sort((a, b) => b - a);
    let sum = 0;
    let j = 0;
    while (sum < m && j < arr.length) {
      sum += arr[j];
      j++;
    }
    return j;
  },
};
