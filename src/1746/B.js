module.exports = {
  getCountOfOperations: (arr) => {
    let k = arr.length;
    let bolo = k - 1;
    let starti = 0;
    let counter = 0;
    for (let j = 1; j < k; j++) {
      if (arr[j - 1] > arr[j]) {
        while (arr[bolo] === 1) {
          bolo--;
        }
        while (arr[starti] === 0) {
          starti++;
        }
        arr[starti] = 0;
        arr[bolo] = 1;
        j = starti + 1;
        k = bolo;
        counter++;
      }
    }
    return counter;
  },
};
