/* eslint-disable prefer-destructuring */
module.exports = {
  isValleyArray: (arr) => {
    let prev = arr[0];
    let next = arr[2];
    for (let j = 1; j < arr.length - 1; j++) {
      if (prev < arr[j] && arr[j] > next) {
        return 'NO';
      }
      if (arr[j] !== next) {
        prev = arr[j];
      }
      next = arr[j + 2];
    }
    return 'YES';
  },
};
