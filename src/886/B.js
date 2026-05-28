module.exports = {
  getFirstLastCafe: (arr) => {
    const set = new Set();
    let last = -1;
    for (let j = arr.length - 1; j >= 0; j--) {
      if (!set.has(arr[j])) {
        last = arr[j];
        set.add(arr[j]);
      }
    }
    return last;
  },
};
