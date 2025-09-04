module.exports = {
  getMinCountOfCoins: (arr, k) => {
    let count = 0;
    arr.sort((a, b) => b - a);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] * 2 ** count <= k) {
        count++;
      }
    }
    return arr.length - count;
  },
};
