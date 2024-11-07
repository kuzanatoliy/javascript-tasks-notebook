module.exports = {
  getCountOfRedNumbers: (arr) => {
    let max = 0;
    let result = arr[max] + Math.floor((arr.length - 1) / 2) + 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] >= arr[max]) {
        max = j;
        result = Math.max(
          arr[max] +
            Math.floor(j / 2) +
            Math.floor((arr.length - j - 1) / 2) +
            1,
          result
        );
      }
    }
    return result;
  },
};
