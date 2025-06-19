module.exports = {
  isItPossibleToSurvive: (main, friends) => {
    const d = (main[0] + main[1]) % 2;
    for (let j = 0; j < friends.length; j++) {
      if ((friends[j][0] + friends[j][1]) % 2 === d) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
