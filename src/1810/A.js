module.exports = {
  isItBeautiful: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= j + 1) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
