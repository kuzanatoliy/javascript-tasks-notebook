module.exports = {
  isItPossibleToSplit: (candies) => {
    let one = 0;
    let two = 0;
    let counter = 0;
    for (let j = 0; j < candies.length; j++) {
      if (candies[j] === 1) {
        one++;
        counter += 1;
      } else {
        two++;
        counter += 2;
      }
    }
    if (counter % 2 !== 0) {
      return 'NO';
    } else if (one === 0 && two % 2 !== 0) {
      return 'NO';
    } else if (
      (one % 2 === 0 && two % 2 !== 0) ||
      (one % 2 === 0 && two % 2 === 0)
    ) {
      return 'YES';
    } else {
      return 'NO';
    }
  },
};
