module.exports = {
  restoreArray: (arr) => {
    const temp = new Array(arr.length).fill(0);
    const res = [];
    let next = 0;
    for (let j = 0; j < arr.length; j++) {
      if (!temp[arr[j] - 1]) {
        res.push(arr[j]);
        temp[arr[j] - 1] = 1;
      } else {
        while (temp[next]) {
          next++;
        }
        res.push(next + 1);
        temp[next] = 1;
      }
    }
    return res;
  },
};
