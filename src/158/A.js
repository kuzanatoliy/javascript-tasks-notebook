module.exports = {
  checkPlayersForNextRound: (place, array) => {
    let count = 0;
    if (array[place - 1] === 0) {
      for (count = 0; count < place; count++) {
        if (array[count] === 0) {
          break;
        }
      }
    } else {
      for (count = place; count < array.length; count++) {
        if (array[count - 1] !== array[count]) {
          break;
        }
      }
    }
    return count;
  },
};
