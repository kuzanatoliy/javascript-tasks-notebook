module.exports = {
  getBeauty: (num) => {
    let n = 1n;
    let sum = 1n;
    while (n <= num) {
      sum *= n;
      sum %= 1000000007n;
      n++;
    }
    return (((num * (num - 1n)) % 1000000007n) * sum) % 1000000007n;
  },
};
