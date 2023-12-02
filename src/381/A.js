module.exports = {
  getPoints: (cards) => {
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let ii = cards.length - 1;
    while (i <= ii) {
      if (cards[ii] > cards[i]) {
        sum1 += cards[ii];
        ii--;
      } else {
        sum1 += cards[i];
        i++;
      }
      if (i > ii) {
        break;
      }
      if (cards[ii] > cards[i]) {
        sum2 += cards[ii];
        ii--;
      } else {
        sum2 += cards[i];
        i++;
      }
    }
    return [sum1, sum2];
  },
};
