module.exports = {
  getMaxOperationCount: (arr) => {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      c0 += arr[j] === 0;
      c1 += arr[j] === 1;
      c2 += arr[j] === 2;
    }
    const pairs = c1 < c2 ? c1 : c2;
    const leftover = c1 > c2 ? c1 - c2 : c2 - c1;
    return c0 + pairs + Math.floor(leftover / 3);
  },
};
