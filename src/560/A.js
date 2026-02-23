module.exports = {
  getMinUnfortunateSum: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        return -1;
      }
    }
    return 1;
  },
};
