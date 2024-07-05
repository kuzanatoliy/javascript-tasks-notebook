/* eslint-disable complexity */
module.exports = {
  isItPossibleToWin: (R, P, S, string) => {
    const map = {};
    for (let j = 0; j < string.length; j++) {
      map[string[j]] = (map[string[j]] || 0) + 1;
    }
    if (
      Math.min(P, map.R || 0) +
        Math.min(S, map.P || 0) +
        Math.min(R, map.S || 0) <
      Math.ceil(string.length / 2)
    ) {
      return ['NO'];
    }
    const res = new Array(string.length);
    for (let j = 0; P && j < string.length; j++) {
      if (string[j] === 'R') {
        res[j] = 'P';
        P--;
      }
    }
    for (let j = 0; S && j < string.length; j++) {
      if (string[j] === 'P') {
        res[j] = 'S';
        S--;
      }
    }
    for (let j = 0; R && j < string.length; j++) {
      if (string[j] === 'S') {
        res[j] = 'R';
        R--;
      }
    }
    let jj = 0;
    while (P && jj < string.length) {
      if (!res[jj]) {
        res[jj] = 'P';
        P--;
      }
      jj++;
    }
    while (S && jj < string.length) {
      if (!res[jj]) {
        res[jj] = 'S';
        S--;
      }
      jj++;
    }
    while (R && jj < string.length) {
      if (!res[jj]) {
        res[jj] = 'R';
        R--;
      }
      jj++;
    }
    return ['YES', res.join('')];
  },
};
