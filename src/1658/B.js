module.exports = {
  getCounts: (num) => {
    if (num % 2 === 1) {
      return 0;
    }
    num /= 2;
    let sum = 1;
    for (let j = 2; j <= num; j++) {
      sum = (sum * j * j) % 998244353;
    }
    return sum;
  },
};
