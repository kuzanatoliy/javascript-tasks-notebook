module.exports = {
  getMinCountOfUtensils: (arr, k) => {
    const counts = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j]]++;
    }
    const max = Math.ceil(Math.max(...counts) / k) * k;
    let res = 0;
    for (let jj = 1; jj < counts.length; jj++) {
      if (counts[jj]) {
        res += max - counts[jj];
      }
    }
    return res;
  },
};
