module.exports = {
  getJumpDistance: (arr) => {
    let l = 0;
    for (let j = 1; arr[j] !== 0 && j < arr.length; j++) {
      l++;
    }
    let r = arr.length - 1;
    for (let jj = r - 1; arr[jj] !== 0 && jj > l; jj--) {
      r--;
    }
    return r - l;
  },
};
