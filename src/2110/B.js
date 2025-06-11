module.exports = {
  isItPossibleToDestroy: (map) => {
    let count = 0;
    for (let j = 1; j < map.length - 1; j++) {
      if (map[j] === '(') {
        count++;
      } else {
        count--;
      }
      if (count < 0) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
