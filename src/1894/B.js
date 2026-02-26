module.exports = {
  transformArray: (arr) => {
    const res = new Array(arr.length).fill(1);
    const temp = new Array(100).fill(0).map(() => []);
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j] - 1].push(j);
    }
    let fl = 1;
    for (let jj = 0; jj < temp.length && fl < 3; jj++) {
      if (temp[jj].length > 1) {
        fl++;
        res[temp[jj][0]] = fl;
      }
    }
    return fl === 3 ? res : [-1];
  },
};
