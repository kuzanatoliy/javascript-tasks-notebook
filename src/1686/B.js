module.exports = {
  getCountOfSubarrays: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        j++;
        count++;
      }
    }
    return count;
  },
};
