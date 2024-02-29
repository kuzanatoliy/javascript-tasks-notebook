module.exports = {
  isItValid: (array) => {
    const arr = array.sort((a, b) => a - b);
    if (arr[1] !== arr[2]) {
      return ['NO'];
    }

    return ['YES', [arr[0], arr[0], arr[2]]];
  },
};
