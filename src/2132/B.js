module.exports = {
  getSuitableX: (num) => {
    const res = [];
    for (let j = 1n; j <= 17n; j++) {
      if (!(num % (10n ** j + 1n))) {
        res.push(num / (10n ** j + 1n));
      }
    }
    return res;
  },
};
