module.exports = {
  transformArray: (arr) => {
    let l = 0;
    while (arr[l] !== 1 && l < arr.length) {
      if (arr[l] === -1) {
        arr[l] = 1;
        break;
      }
      l++;
    }
    let r = arr.length - 1;
    while (arr[r] !== 1 && r >= 0) {
      if (arr[r] === -1) {
        arr[r] = 1;
        break;
      }
      r--;
    }
    while (l < r) {
      if (arr[l] === -1) {
        arr[l] = 0;
      }
      l++;
    }
    return arr;
  },
};
