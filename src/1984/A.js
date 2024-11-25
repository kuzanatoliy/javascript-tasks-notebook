module.exports = {
  isItPossibleToColor: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[j - 1]) {
        arr.fill('R');
        arr[1] = 'B';
        return ['YES', arr.join('')];
      }
    }
    return ['NO'];
  },
};
