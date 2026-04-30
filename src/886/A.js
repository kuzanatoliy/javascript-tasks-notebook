/* eslint-disable max-depth */
module.exports = {
  isItPossibleToBuildTeam: (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    for (let j = 0; j < arr.length; j++) {
      for (let jj = j + 1; jj < arr.length; jj++) {
        for (let jjj = jj + 1; jjj < arr.length; jjj++) {
          if ((arr[j] + arr[jj] + arr[jjj]) * 2 === sum) {
            return 'YES';
          }
        }
      }
    }
    return 'NO';
  },
};
