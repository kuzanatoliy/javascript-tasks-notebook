module.exports = {
  getWinner: (arr) => {
    const map = {};
    let max = 0;
    let val = null;
    for (let j = 0; j < arr.length; j++) {
      map[arr[j]] = (map[arr[j]] || 0) + 1;
      if (map[arr[j]] > max) {
        val = arr[j];
        max = map[arr[j]];
      }
    }
    return val;
  },
};
