module.exports = {
  transformArray: (arr) => {
    let c0 = 0;
    for (let j = 0; j < arr.length; j++) {
      c0 += arr[j] === 0;
    }
    const c1 = arr.length - c0;
    if (c0 >= c1) {
      return new Array(c0).fill(0);
    } else {
      return new Array(Math.floor(c1 / 2) * 2).fill(1);
    }
  },
};
