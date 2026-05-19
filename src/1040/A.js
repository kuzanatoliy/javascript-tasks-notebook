module.exports = {
  getAmount: (a, b, arr) => {
    let amount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[arr.length - j - 1] === 2) {
        if (arr[j] === 0) {
          amount += a;
        } else if (arr[j] === 1) {
          amount += b;
        } else {
          amount += a < b ? a : b;
        }
      } else if (arr[arr.length - j - 1] + arr[j] === 1) {
        return -1;
      }
    }
    return amount;
  },
};
