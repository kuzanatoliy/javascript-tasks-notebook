module.exports = {
  isItPossibleToGetDerangement: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        return ['YES', [arr[j - 1], arr[j]]];
      }
    }
    return ['NO'];
  },
};
