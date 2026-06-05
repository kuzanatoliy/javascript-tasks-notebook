module.exports = {
  reorderArray: (arr) => {
    arr.sort((a, b) => b - a);
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] === arr[j]) {
        return [-1];
      }
    }
    return arr;
  },
};
