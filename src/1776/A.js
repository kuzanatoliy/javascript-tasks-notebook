/* eslint-disable consistent-return */
module.exports = {
  isItPossibleToWalkTwice: (arr) => {
    let c = Math.floor(arr[0] / 120);
    for (let j = 1; j < arr.length; j++) {
      c += Math.floor((arr[j] - arr[j - 1]) / 120);
    }
    c += Math.floor((1440 - arr[arr.length - 1]) / 120);
    return c > 1 ? 'YES' : 'NO';
  },
};
