module.exports = {
  getCountOfOperations: (snum) => {
    const arr = snum.split('').reverse();
    let c0 = arr.length;
    let c1 = arr.length;
    let c2 = arr.length;
    let c5 = arr.length;
    for (let j = 0; j < arr.length; j++) {
      if (c0 === arr.length && arr[j] === '0') {
        c0 = j;
        continue;
      }
      if (
        c1 === arr.length &&
        c0 !== arr.length &&
        (arr[j] === '0' || arr[j] === '5')
      ) {
        c1 = j;
        continue;
      }
      if (c5 === arr.length && arr[j] === '5') {
        c5 = j;
        continue;
      }
      if (
        c2 === arr.length &&
        c5 !== arr.length &&
        (arr[j] === '2' || arr[j] === '7')
      ) {
        c2 = j;
        continue;
      }
    }
    return Math.min(c1 - 1, c2 - 1);
  },
};
