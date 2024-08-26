module.exports = {
  sortArray: (array) => {
    const res = [];
    for (let j = 1; j < array.length; j++) {
      let min = j - 1;
      for (let jj = j; jj < array.length; jj++) {
        if (array[min] > array[jj]) {
          min = jj;
        }
      }
      if (min < j) {
        continue;
      }
      const temp = array[min];
      for (let jjj = min; jjj >= j; jjj--) {
        array[jjj] = array[jjj - 1];
      }
      array[j - 1] = temp;
      res.push([j, min + 1, min - j + 1]);
    }
    return res;
  },
};
