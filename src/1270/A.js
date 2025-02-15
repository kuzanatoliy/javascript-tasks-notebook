module.exports = {
  couldFirstPlayerWin: (arr1, arr2) =>
    Math.max(...arr1) > Math.max(...arr2) ? 'YES' : 'NO',
};
