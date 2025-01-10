module.exports = {
  getCountOfDays: (num, a, b, c) => {
    const d = a + b + c;
    let ans = num % d;
    let count = ((num - ans) / d) * 3;
    if (ans > 0) {
      count++;
      ans -= a;
    }
    if (ans > 0) {
      count++;
      ans -= b;
    }
    if (ans > 0) {
      count++;
      ans -= c;
    }
    return count;
  },
};
