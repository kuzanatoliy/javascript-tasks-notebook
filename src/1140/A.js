module.exports = {
  getCountOfDays: (arr) => {
    let res = 0;
    let last = 0;
    for (let j = 0; j < arr.length; j++) {
      last = Math.max(arr[j], last);
      res += j + 1 === last;
    }
    return res;
  },
};
