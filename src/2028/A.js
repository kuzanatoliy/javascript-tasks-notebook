module.exports = {
  isItPossibleToMeet: (x, y, map) => {
    let t = 15;
    let px = 0;
    let py = 0;
    while (t) {
      for (let j = 0; j < map.length; j++) {
        switch (map[j]) {
          case 'N':
            py++;
            break;
          case 'E':
            px++;
            break;
          case 'S':
            py--;
            break;
          case 'W':
            px--;
            break;
        }
        if (x === px && y === py) {
          return 'YES';
        }
      }
      t--;
    }
    return 'NO';
  },
};
