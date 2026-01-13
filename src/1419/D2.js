module.exports = {
  reorderArray: (arr) => {
    arr.sort((a, b) => a - b);
    const d = Math.floor(arr.length / 2);
    const res = new Array(arr.length);
    for (let j = 0; j < d; j++) {
      res[j * 2 + 1] = arr[j];
    }
    for (let jj = d; jj < arr.length; jj++) {
      res[(jj - d) * 2] = arr[jj];
    }
    let count = 0;
    for (let jjj = 1; jjj < res.length - 1; jjj++) {
      count += res[jjj - 1] > res[jjj] && res[jjj + 1] > res[jjj];
    }
    return [count, res];
  },
};
