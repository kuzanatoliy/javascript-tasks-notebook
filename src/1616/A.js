module.exports = {
  getCountOfVariants: (arr) => {
    const map = {};
    for (let j = 0; j < arr.length; j++) {
      const id = Math.abs(arr[j]);
      map[id] = (map[id] || 0) + 1;
    }
    const keys = Object.keys(map);
    let sum = 0;
    for (let jj = 0; jj < keys.length; jj++) {
      sum += map[keys[jj]] > 1 && keys[jj] !== '0' ? 2 : 1;
    }
    return sum;
  },
};
