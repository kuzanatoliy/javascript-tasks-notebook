module.exports = {
  getCountOfMissedGames: (curr, games) => {
    const arr = new Array(curr - 1).fill(0);
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < games.length; j++) {
      if (games[j][0] === 1) {
        c1++;
        c2++;
        arr[games[j][1] - 1] = 1;
        arr[games[j][2] - 1] = 2;
        continue;
      }
      arr[games[j][1] - 1] = 2;
      c2++;
    }
    let min = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0 && arr[j + 1] === 0) {
        min++;
        j++;
        continue;
      }
      if (arr[j] === 0) {
        min++;
      }
    }
    return [min, curr - 1 - c1 - c2];
  },
};
