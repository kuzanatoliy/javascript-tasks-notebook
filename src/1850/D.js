module.exports = {
  getCountOfRemovedElems: (array, k) => {
    const arr = array.sort((a, b) => a - b);
    let max = 1;
    let curr = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] > k) {
        curr = 1;
      } else {
        curr++;
      }
      max = Math.max(max, curr);
    }
    return arr.length - max;
  },
};
