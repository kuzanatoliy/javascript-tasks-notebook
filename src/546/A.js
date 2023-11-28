module.exports = {
  checkBananasCount: (price, money, count) => {
    let sum = 0;
    for (let si = count; si > 0; si--) {
      sum += si;
    }
    sum = sum * price - money;
    return sum > 0 ? sum : 0;
  },
};
