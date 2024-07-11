/* eslint-disable max-depth */
module.exports = {
  isThreeDistinctIndicesExisted: (array) => {
    let arr = array.map((item) => {
      const d = item.toString();
      return +d[d.length - 1];
    });
    const f = new Array(10).fill(0);
    arr = arr.filter((item) => {
      f[item]++;
      return f[item] <= 3;
    });
    for (let j = 0; j < arr.length; j++) {
      for (let jj = j + 1; jj < arr.length; jj++) {
        for (let jjj = jj + 1; jjj < arr.length; jjj++) {
          const temp = (arr[j] + arr[jj] + arr[jjj]).toString();
          if (temp[temp.length - 1] === '3') {
            return 'YES';
          }
        }
      }
    }
    return 'NO';
  },
};
