module.exports = {
  buildNumber: (arr) => {
    let c0 = 0;
    let c5 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        c0++;
      } else {
        c5++;
      }
    }
    if (c0 === 0) {
      return -1;
    }
    if (c5 < 9) {
      return 0;
    }
    return (
      new Array(c5 - (c5 % 9)).fill(5).join('') + new Array(c0).fill(0).join('')
    );
  },
};
