module.exports = {
  getMoves: (maxMoves, towers) => {
    const res = [];
    let j = 0;
    let min = 0;
    let max = 0;
    while (j < maxMoves) {
      for (let jj = 0; jj < towers.length; jj++) {
        if (towers[jj] > towers[max]) {
          max = jj;
        }
        if (towers[jj] < towers[min]) {
          min = jj;
        }
      }
      if (max === min || towers[max] - towers[min] <= 1) {
        break;
      }
      j++;
      res.push([max + 1, min + 1]);
      towers[max]--;
      towers[min]++;
    }
    for (let jj = 0; jj < towers.length; jj++) {
      if (towers[jj] > towers[max]) {
        max = jj;
      }
      if (towers[jj] < towers[min]) {
        min = jj;
      }
    }
    return [[towers[max] - towers[min], j], ...res];
  },
};
