module.exports = {
  getMaxValue: (arr) => {
    let res = -1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== j) {
        if (res < 0) {
          res = arr[j];
        } else {
          res &= arr[j];
        }
      }
    }
    return res;
  },
};
