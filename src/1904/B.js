/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfNumbers: (array) => {
    const sortedArray = [...array].sort((a, b) => a - b);
    const prefixSum = [];
    const map = {};
    prefixSum[0] = sortedArray[0];
    for (let i = 1; i < sortedArray.length; ++i) {
      prefixSum[i] = prefixSum[i - 1] + sortedArray[i];
    }
    let j = 0;
    while (j < sortedArray.length) {
      let counter = j;
      while (
        prefixSum[counter] >= sortedArray[counter + 1] &&
        counter < sortedArray.length
      ) {
        counter++;
      }
      while (j <= counter) {
        map[sortedArray[j]] = counter;
        j++;
      }
    }
    const temp = [];
    for (let jj = 0; jj < array.length; jj++) {
      temp.push(map[array[jj]]);
    }
    return temp;
  },
};
