module.exports = {
  getRightNumber: (arr) => {
    let [x] = arr;
    for (let j = 1; j < arr.length; j++) {
      x &= arr[j];
    }
    return x;
  },
};
