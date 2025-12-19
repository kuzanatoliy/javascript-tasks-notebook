module.exports = {
  getTheBestNumber: (num, arr) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      c1 += arr[j] > num;
      c2 += arr[j] < num;
    }
    return c1 > c2 ? num + 1 : num - 1;
  },
};
