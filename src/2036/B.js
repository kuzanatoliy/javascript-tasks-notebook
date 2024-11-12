module.exports = {
  getMaxIncome: (num, drinks) => {
    const map = {};
    for (let j = 0; j < drinks.length; j++) {
      map[drinks[j][0]] = (map[drinks[j][0]] || 0) + drinks[j][1];
    }
    const inc = Object.keys(map)
      .map((item) => map[item])
      .sort((a, b) => b - a);
    let income = 0;
    for (let jj = 0; jj < inc.length && jj < num; jj++) {
      income += inc[jj];
    }
    return income;
  },
};
