const getMaxCost = (num) => {
  switch (num) {
    case 1:
      return 1;
    case 2:
      return 9;
    case 3:
      return 29;
    case 4:
      return 56;
    case 5:
      return 95;
    case 6:
      return 145;
    default:
      return getMaxCost(num - 1) + (num - 1) * 10;
  }
};

module.exports = {
  getMaxCost,
};
