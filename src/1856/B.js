module.exports = {
  isItGoodArray: (arr) => {
    if (arr.length === 1) {
      return 'NO';
    }
    let sum = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      if (arr[j] === 1) {
        count++;
      }
    }
    return sum < arr.length + count ? 'NO' : 'YES';
  },
};
