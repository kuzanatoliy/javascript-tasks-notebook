module.exports = {
  getMinPossiblePenalty(string) {
    let cp = 0;
    let cm = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '+') {
        cp++;
      } else {
        cm++;
      }
    }

    return Math.abs(cp - cm);
  },
};
