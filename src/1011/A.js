module.exports = {
  getRoketWeight: (map, k) => {
    const arr = new Array(26).fill(0);
    for (let j = 0; j < map.length; j++) {
      arr[map.charCodeAt(j) - 97]++;
    }
    let w = 0;
    for (let jj = 0; jj < arr.length && k; jj++) {
      if (arr[jj]) {
        w += jj + 1;
        k--;
        jj++;
      }
    }
    return k === 0 ? w : -1;
  },
};
