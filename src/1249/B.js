module.exports = {
  getCountOfDays: (arr) => {
    const res = new Array(arr.length).fill(0);
    for (let j = 0; j < arr.length; j++) {
      if (!res[arr[j] - 1]) {
        const temp = [arr[j]];
        while (temp[temp.length - 1] !== j + 1) {
          temp.push(arr[temp[temp.length - 1] - 1]);
        }
        for (let jj = 0; jj < temp.length; jj++) {
          res[temp[jj] - 1] = temp.length;
        }
      }
    }
    return res;
  },
};
