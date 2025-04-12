module.exports = {
  getMaxIncome: (num, h, restrictions) => {
    const houses = new Array(num).fill(h);
    for (let j = 0; j < restrictions.length; j++) {
      for (let jj = restrictions[j][0] - 1; jj < restrictions[j][1]; jj++) {
        houses[jj] = Math.min(houses[jj], restrictions[j][2]);
      }
    }
    const arr = houses.map((item) => item * item);
    return arr.reduce((a, b) => a + b, 0);
  },
};
