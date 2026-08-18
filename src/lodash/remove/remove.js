module.exports = {
  remove: (arr, predicate) => {
    const res = [];

    let k = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      if (predicate(arr[jj])) {
        res.push(arr[jj]);
      } else {
        arr[k] = arr[jj];
        k++;
      }
    }
    arr.length = k;

    return res;
  },
};
