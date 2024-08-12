/* eslint-disable prefer-destructuring */
/* eslint-disable complexity */
const MAX = -1;

module.exports = {
  getCountOfAmount: (books) => {
    let doubleMax = MAX;
    let fMax = MAX;
    let sMax = MAX;
    for (let i = 0; i < books.length; i++) {
      const time = parseInt(books[i][0]);
      const perks = books[i][1];
      if (perks === '00') {
        continue;
      }
      if (perks === '11' && (time < doubleMax || doubleMax === -1)) {
        doubleMax = time;
      }
      if (perks === '10' && (time < fMax || fMax === -1)) {
        fMax = time;
      }
      if (perks === '01' && (time < sMax || sMax === -1)) {
        sMax = time;
      }
    }
    let res = -1;
    if (sMax === -1 || fMax === -1) {
      if (doubleMax !== -1) {
        res = doubleMax;
      }
    } else if (doubleMax === -1) {
      res = sMax + fMax;
    } else {
      res = doubleMax < sMax + fMax ? doubleMax : sMax + fMax;
    }
    return res;
  },
};
