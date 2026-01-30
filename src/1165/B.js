module.exports = {
  getMaxCountOfDays: (arr) => {
    arr.sort((a, b) => a - b);
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
      c += c < arr[j];
    }
    return c;
  },
};
