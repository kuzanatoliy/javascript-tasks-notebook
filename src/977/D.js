module.exports = {
  getReordedArray: (array) => {
    let arr = [];
    for (let j = 0; j < array.length; j++) {
      let temp = array[j];
      let index = 0;
      while (temp % 3n === 0n) {
        temp /= 3n;
        index++;
      }
      arr.push([index, array[j]]);
    }
    arr = arr.sort((a, b) => {
      const d = b[0] - a[0];
      if (d === 0) {
        return Number(a[1] - b[1]);
      }
      return d;
    });
    return arr.map((item) => item[1]);
  },
};
