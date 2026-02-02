module.exports = {
  getPairs: (arr) => {
    const pairs = [];
    arr.sort((a, b) => b - a);
    const set = new Set(arr);
    const l = Math.floor(arr.length / 2);
    for (let j = 0; j < arr.length && pairs.length < l; j++) {
      for (let jj = j + 1; jj < arr.length && pairs.length < l; jj++) {
        const d = arr[j] % arr[jj];
        if (!set.has(d)) {
          pairs.push([arr[j], arr[jj]]);
        }
      }
    }
    return pairs;
  },
};
