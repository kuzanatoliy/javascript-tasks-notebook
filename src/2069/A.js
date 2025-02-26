module.exports = {
  isArrayExisted: (arr) => {
    let j = 0;
    let l = arr.length - 1;
    while (j < arr.length && arr[j] === 0) {
      j++;
    }
    while (j < l && arr[l] === 0) {
      l--;
    }
    let count = 0;
    while (j <= l) {
      if (arr[j] === 1 && count === 1) {
        return 'NO';
      } else if (arr[j] === 0) {
        count++;
      } else {
        count = 0;
      }
      j++;
    }
    return 'YES';
  },
};
