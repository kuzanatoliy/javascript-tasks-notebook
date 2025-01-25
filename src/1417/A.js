module.exports = {
  getCountOfOperations: (arr, k) => {
    let min = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let sum = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      if (jj === min) {
        continue;
      }
      sum += Math.floor((k - arr[jj]) / arr[min]);
    }
    return sum;
  },
};
