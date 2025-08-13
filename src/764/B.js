module.exports = {
  transformArray: (arr) => {
    const d = arr.length / 2;
    for (let j = 0; j < d; j += 2) {
      const temp = arr[j];
      arr[j] = arr[arr.length - j - 1];
      arr[arr.length - j - 1] = temp;
    }
    return arr;
  },
};
