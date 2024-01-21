module.exports = {
  getYears: (kilos, supermarkets) => {
    let temp = 1000000;
    for (let i = 0; i < supermarkets.length; i++) {
      temp = Math.min(temp, supermarkets[i][0] / supermarkets[i][1]);
    }
    return temp * kilos;
  },
};
