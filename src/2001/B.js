module.exports = {
  getPermutation: (num) => {
    if (num % 2 === 0) {
      return -1;
    }
    const arr = new Array(num)
      .fill(0)
      .map((_, index) => index + 1)
      .reverse();
    for (let j = 1; j < num; j += 2) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
    return arr;
  },
};
