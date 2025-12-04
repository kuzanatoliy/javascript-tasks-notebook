module.exports = {
  chunk: (arr, size = 1) => {
    const res = [];
    for (let j = 0; j < arr.length; j += size) {
      const temp = [];
      for (let jj = j; jj < j + size && jj < arr.length; jj++) {
        temp.push(arr[jj]);
      }
      res.push(temp);
    }
    return res;
  },
};
