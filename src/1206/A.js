module.exports = {
  getUniqValue: (arr1, arr2) => {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);
    return [arr1[0], arr2[0]];
  },
};
