module.exports = {
  getBalancedArray: (number) => {
    const n = number / 2;
    if (n % 2 > 0) {
      return ['NO', []];
    }
    let sum = 2;
    const res = [2];
    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] + 2;
      sum += res[i];
    }
    sum--;
    res.push(1);
    for (let i = 1; i < n - 1; i++) {
      res.push(res.at(-1) + 2);
      sum -= res.at(-1);
    }
    res.push(sum);
    return ['YES', res];
  },
};
