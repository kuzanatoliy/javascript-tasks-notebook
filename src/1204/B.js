module.exports = {
  getSums: (num, l, r) => {
    let sum1 = num - l + 1;
    l--;
    let next = 2;
    while (l) {
      sum1 += next;
      next *= 2;
      l--;
    }
    next = 1;
    let sum2 = 1;
    r--;
    num--;
    while (r) {
      next *= 2;
      sum2 += next;
      r--;
      num--;
    }
    sum2 += next * num;
    return [sum1, sum2];
  },
};
