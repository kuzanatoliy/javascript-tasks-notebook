module.exports = {
  getMinCountOfOperations: (snum) => {
    let d = +snum[0];
    const arr = snum.split('').slice(1).sort();
    let j = 0;
    while (arr.length > j && d + +arr[j] < 10) {
      d += +arr[j];
      j++;
    }
    return arr.length - j;
  },
};
