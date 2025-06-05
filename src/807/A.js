module.exports = {
  getTypeOfContest: (rates) => {
    if (rates[0][0] !== rates[0][1]) {
      return 'rated';
    }
    let f = 0;
    for (let j = 1; j < rates.length; j++) {
      f += rates[j][0] > rates[j - 1][0];
      if (rates[j][0] !== rates[j][1]) {
        return 'rated';
      }
    }
    return f ? 'unrated' : 'maybe';
  },
};
