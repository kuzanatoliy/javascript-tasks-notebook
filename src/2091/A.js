module.exports = {
  getStep: (arr) => {
    let count = 0;
    const counts = {
      0: 3,
      1: 1,
      2: 2,
      3: 1,
      4: 0,
      5: 1,
    };
    for (let j = 0; j < arr.length; j++) {
      if (counts[arr[j]]) {
        counts[arr[j]]--;
        count++;
      }
      if (count === 8) {
        return j + 1;
      }
    }
    return 0;
  },
};
