module.exports = {
  getKFactorization: (num, k) => {
    const res = [];
    for (let j = 2; j <= num / 2 && res.length < k - 1; j++) {
      while (num % j === 0 && res.length < k - 1) {
        res.push(j);
        num /= j;
      }
    }
    res.push(num);
    return res.length === k && num > 1 ? res : [-1];
  },
};
