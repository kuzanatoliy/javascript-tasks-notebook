module.exports = {
  getCountOfParticipantsInFront: (distances) => {
    let count = 0;
    for (let j = 1; j < 4; j++) {
      if (distances[j] > distances[0]) {
        count++;
      }
    }
    return count;
  },
};
