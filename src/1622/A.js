module.exports = {
  isItPossibleToCreateFigure: (array) => {
    const arr = array.sort((a, b) => a - b);
    if (arr[2] === arr[1] + arr[0]) {
      return 'YES';
    }
    if (arr[0] === arr[1] && arr[2] % 2 === 0) {
      return 'YES';
    }
    if (arr[1] === arr[2] && arr[0] % 2 === 0) {
      return 'YES';
    }
    return 'NO';
  },
};
