module.exports = {
  isItPossibleToPassCandy: (string) => {
    let x = 0;
    let y = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'R') {
        x++;
      } else if (string[j] === 'L') {
        x--;
      } else if (string[j] === 'U') {
        y++;
      } else if (string[j] === 'D') {
        y--;
      }

      if (x === 1 && y === 1) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
