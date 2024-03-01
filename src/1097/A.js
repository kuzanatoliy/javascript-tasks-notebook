module.exports = {
  isItPossibleToPlayCard: (card, cards) => {
    for (let j = 0; j < cards.length; j++) {
      if (cards[j][0] === card[0] || cards[j][1] === card[1]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
