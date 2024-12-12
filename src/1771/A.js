module.exports = {
  getCountOfInterestingPairs: (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === min) {
        c1++;
      }
      if (arr[j] === max) {
        c2++;
      }
    }
    if (c1 !== arr.length && c2 !== arr.length) {
      return c1 * c2 * 2;
    } else {
      return (arr.length - 1) * arr.length;
    }
  },
};
