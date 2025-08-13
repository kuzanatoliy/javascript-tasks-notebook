module.exports = {
  isItPossibleToMeet: (num, a, x, b, y) => {
    for (let j = 0; j < num; j++) {
      let d1 = (a + j) % num;
      if (d1 === 0) {
        d1 = num;
      }
      let d2 = (b - j) % num;
      if (d2 < 0) {
        d2 = num + d2;
      }
      if (d2 === 0) {
        d2 = num;
      }
      if (d1 === d2) {
        return 'YES';
      }
      if (d1 === x || d2 === y) {
        break;
      }
    }
    return 'NO';
  },
};
