module.exports = {
  getCountOfOperations: (arr) => {
    let [max] = arr;
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
      if (max === arr[j]) {
        count++;
      } else if (max < arr[j]) {
        count++;
        max = arr[j];
      }
    }
    return count;
  },
};
