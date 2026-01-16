module.exports = {
  getCountOfGrannies: (arr) => {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= j + 1) {
        count = j + 1;
      }
    }
    return count + 1;
  },
};
