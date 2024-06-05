/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfClasses: (emplProps, languages) => {
    const prev = new Array(languages + 1).fill(0);
    const arr = emplProps
      .filter((item) => item[0] !== 0)
      .map((item) => item.slice(1).sort((a, b) => a - b))
      .sort((a, b) => a[0] - b[0]);
    let cCount = 0;
    for (let j = 0; j < arr.length; j++) {
      let flag = false;
      if (prev[arr[j][0]] === 0) {
        cCount++;
        prev[arr[j][0]] = arr[j][0];
        flag = true;
      }
      for (let jj = 1; jj < arr[j].length; jj++) {
        if (prev[arr[j][jj]] === 0) {
          prev[arr[j][jj]] = prev[arr[j][0]];
          prev[arr[j][0]] = arr[j][jj];
          continue;
        }
        if (flag) {
          cCount--;
          flag = false;
          prev[arr[j][0]] = prev[arr[j][jj]];
          prev[arr[j][jj]] = arr[j][0];
        }
      }
    }
    return emplProps.length - arr.length + (cCount > 0 ? cCount - 1 : 0);
  },
};
