module.exports = {
  isItPossibleToTurnOn: (num, maps) => {
    const arr = new Array(num).fill(0);
    for (let j = 0; j < maps.length; j++) {
      for (let jj = 1; jj < maps[j].length; jj++) {
        arr[maps[j][jj] - 1]++;
      }
    }
    return arr.indexOf(0) === -1 ? 'YES' : 'NO';
  },
};
