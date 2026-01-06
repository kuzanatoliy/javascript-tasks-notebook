module.exports = {
  getLastColor: (arr) => {
    arr.sort((a, b) => a - b);
    const num = new Set(arr).size;
    for (let j = 0; j < arr.length; j++) {
      if (num <= arr[j]) {
        return arr[j];
      }
    }
    return arr[arr.length - 1];
  },
};
