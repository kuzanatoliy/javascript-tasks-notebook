module.exports = {
  getMinStr: (m, array) => {
    const map = new Array(m).fill('B');
    const arr = array.map((item) => Math.min(item, m + 1 - item));
    for (let j = 0; j < arr.length; j++) {
      if (map[arr[j] - 1] === 'B') {
        map[arr[j] - 1] = 'A';
      } else {
        map[m - arr[j]] = 'A';
      }
    }
    return map.join('');
  },
};
