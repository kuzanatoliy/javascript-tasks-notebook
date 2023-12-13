module.exports = {
  getAmount: (citizens) => {
    let max = 0;
    let sum = 0;
    for (let t = 0; t < citizens.length; t++) {
      if (citizens[t] > max) {
        max = citizens[t];
      }
      sum += citizens[t];
    }
    return max * citizens.length - sum;
  },
};
