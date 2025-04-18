module.exports = {
  getPairCount: (arr) => {
    const map = {};
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) {
        map[arr[j]] = (map[arr[j]] || 0) + 1;
        count += map[arr[j]] === 2;
        if (map[arr[j]] > 2) {
          return -1;
        }
      }
    }
    return count;
  },
};
