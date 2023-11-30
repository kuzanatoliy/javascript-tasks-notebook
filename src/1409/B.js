function calc(a, b, c, d, e) {
  let ans = a - c;
  if (ans >= e) {
    return (a - e) * b;
  } else {
    e -= ans;
    ans = b - d;
    return c * (b - (ans > e ? e : ans));
  }
}

module.exports = {
  getMinimumProducts: (numbers) => {
    const sum1 = calc(
      numbers[0],
      numbers[1],
      numbers[2],
      numbers[3],
      numbers[4]
    );
    const sum2 = calc(
      numbers[1],
      numbers[0],
      numbers[3],
      numbers[2],
      numbers[4]
    );
    return sum1 > sum2 ? sum2 : sum1;
  },
};
