module.exports = {
  getTotalDissatisfaction: (num, x, t) => {
    const maxAngry = t / x;
    if (num <= maxAngry + 1n) {
      return (num * (num - 1n)) / 2n;
    }
    return (maxAngry * (maxAngry - 1n)) / 2n + maxAngry * (num - maxAngry);
  },
};
