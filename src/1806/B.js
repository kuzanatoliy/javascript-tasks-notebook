module.exports = {
  getMinValue: (arr) => {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        c0++;
      } else if (arr[j] === 1) {
        c1++;
      } else {
        c2++;
      }
    }
    if (c0 <= Math.ceil(arr.length / 2)) {
      return 0;
    } else if (c1 === 0 || c2 > 0) {
      return 1;
    } else {
      return 2;
    }
  },
};
