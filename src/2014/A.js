module.exports = {
  getCount: (arr, k) => {
    let store = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= k) {
        store += arr[j];
      }
      if (store > 0 && arr[j] === 0) {
        count++;
        store--;
      }
    }
    return count;
  },
};
