module.exports = {
  getCard: (cards, shakes) => {
    let f = 0;
    for (let j = 0; j < shakes.length; j++) {
      f = (f + shakes[j]) % cards.length;
    }
    return cards[f];
  },
};
