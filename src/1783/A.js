module.exports = {
  isItPossibleToReorder: (array) => {
    if (array[0] === array[array.length - 1]) {
      return ['NO'];
    }
    const res = [array[array.length - 1], array[0]];
    for (let j = 1; j < array.length - 1; j++) {
      res.push(array[j]);
    }
    return ['YES', res];
  },
};
