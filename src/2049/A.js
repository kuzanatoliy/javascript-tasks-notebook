module.exports = {
  getCountOfOperations: (array) => {
    const arr = array.map((item) => (item >= 1 ? 1 : 0));
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] + arr[j] === 1) {
        count++;
      }
    }
    if (count === 0 && arr[0] === 0) {
      return 0;
    }
    if (count < 2 || (count === 2 && arr[0] === 0)) {
      return 1;
    }
    return 2;
  },
};
