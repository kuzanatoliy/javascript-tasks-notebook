module.exports = {
  getMap: (arr) => {
    let l = 0;
    let r = arr.length - 1;
    let c = 0;
    let map = '';
    while (l <= r) {
      if (c % 2 === 0) {
        if (arr[l] > arr[r]) {
          map += 'L';
          l++;
        } else {
          map += 'R';
          r--;
        }
      } else if (arr[l] > arr[r]) {
        map += 'R';
        r--;
      } else {
        map += 'L';
        l++;
      }
      c++;
    }
    return map;
  },
};
