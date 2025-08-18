module.exports = {
  getCountOfCleaning: (arr, p1, p2) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        c1++;
        continue;
      }
      c2++;
    }
    return Math.max(c1 - p1 + Math.max(c2 - p2, 0), 0);
  },
};
