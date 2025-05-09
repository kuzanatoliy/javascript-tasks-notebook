module.exports = {
  isItPossibleToSplit: (a, b, c) => {
    const arr = [a, b, c].sort((v1, v2) => v1 - v2);
    return arr[1] % arr[0] === 0 &&
      arr[2] % arr[0] === 0 &&
      (arr[1] + arr[2]) / arr[0] < 6
      ? 'YES'
      : 'NO';
  },
};
