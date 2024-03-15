module.exports = {
  getState: (array, moves) => {
    for (let j = 0; j < array.length; j++) {
      array[j] += 10;
      for (let jj = 0; jj < moves[j].length; jj++) {
        if (moves[j][jj] === 'D') {
          array[j]++;
          continue;
        }
        array[j]--;
      }
      const temp = `${array[j]}`;
      array[j] = +temp[temp.length - 1];
    }
    return array;
  },
};
