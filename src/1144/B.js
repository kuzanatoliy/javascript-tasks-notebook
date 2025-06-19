module.exports = {
  getMinSum: (arr) => {
    const oddArr = [];
    const evenArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2) {
        oddArr.push(arr[j]);
      } else {
        evenArr.push(arr[j]);
      }
    }
    let sum = 0;
    if (oddArr.length > evenArr.length) {
      oddArr.sort((a, b) => a - b);
      for (let jj = 0; jj < oddArr.length - evenArr.length - 1; jj++) {
        sum += oddArr[jj];
      }
    } else {
      evenArr.sort((a, b) => a - b);
      for (let jjj = 0; jjj < evenArr.length - oddArr.length - 1; jjj++) {
        sum += evenArr[jjj];
      }
    }
    return sum;
  },
};
