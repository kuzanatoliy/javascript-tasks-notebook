module.exports = {
  getCountOfRemovedElements: (arr) => {
    const counts = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j]]++;
    }
    let res = 0;
    for (let jj = 0; jj < counts.length; jj++) {
      res += counts[jj] < jj ? counts[jj] : counts[jj] - jj;
    }
    return res;
  },
};
