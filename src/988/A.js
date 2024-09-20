module.exports = {
  isItPossibleToCreateForm: (arr, k) => {
    const map = new Array(101);
    for (let j = 0; j < arr.length; j++) {
      map[arr[j]] = j + 1;
    }
    const res = [];
    for (let jj = 0; jj < map.length && res.length < k; jj++) {
      if (map[jj] > 0) {
        res.push(map[jj]);
      }
    }
    return res.length === k ? ['YES', res] : ['NO'];
  },
};
