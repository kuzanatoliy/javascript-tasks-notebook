module.exports = {
  getCountOfOperations: (arr, k) => {
    const freq = new Array(arr.length + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      freq[arr[j]]++;
    }

    let neededCount = 0;
    for (let jj = 0; jj < k; jj++) {
      if (freq[jj] === 0) {
        neededCount++;
      }
    }

    let kCount = 0;
    if (k <= arr.length) {
      kCount = freq[k];
    }

    return Math.max(neededCount, kCount);
  },
};
