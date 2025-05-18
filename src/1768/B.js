module.exports = {
  getCountOfOperations: (arr, k) => {
    let f = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === f + 1) {
        f++;
      }
    }
    return Math.ceil((arr.length - f) / k);
  },
};
