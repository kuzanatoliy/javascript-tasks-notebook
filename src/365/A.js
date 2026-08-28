module.exports = {
  getGoodNumCount: (arr, k) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += +Array.from(new Set(arr[j].toString())).sort().join('')[k] === k;
    }
    return count;
  },
};
