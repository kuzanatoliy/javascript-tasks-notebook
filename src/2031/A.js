module.exports = {
  getCountOfOperations: (arr) => {
    arr.sort((a, b) => a - b);
    let curr = 1;
    let max = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] !== arr[j]) {
        if (max < curr) {
          max = curr;
        }
        curr = 0;
      }
      curr++;
    }
    return arr.length - (max < curr ? curr : max);
  },
};
