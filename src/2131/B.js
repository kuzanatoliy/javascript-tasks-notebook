module.exports = {
  buildArray: (num) => {
    const arr = new Array(num).fill(-1);
    for (let j = 1; j < arr.length; j += 2) {
      arr[j] = 3;
    }
    if (arr.length % 2 === 0) {
      arr[arr.length - 1] = 2;
    }
    return arr;
  },
};
