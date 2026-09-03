/* eslint-disable no-undefined */
module.exports = {
  pullAt: (arr, indexes) => {
    const res = [];
    for (let j = 0; j < indexes.length; j++) {
      if (arr[indexes[j]]) {
        res.push([arr[indexes[j]], indexes[j]]);
        arr[indexes[j]] = undefined;
      }
    }

    let k = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      arr[k] = arr[jj];
      if (arr[jj]) {
        k++;
      }
    }
    arr.length = k;

    return res.sort((a, b) => a[1] - b[1]).map((item) => item[0]);
  },
};
