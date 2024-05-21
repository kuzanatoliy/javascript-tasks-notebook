module.exports = {
  getCountOfCards: (cards, maxVal) => {
    let n = 0;
    let p = 0;
    for (let j = 0; j < cards.length; j++) {
      if (cards[j] < 0) {
        n += cards[j];
        continue;
      }
      p += cards[j];
    }
    return Math.ceil(Math.abs(p + n) / maxVal);
  },
};
