module.exports = {
  getLargestNotPerfectSquare: (arr) => {
    arr.sort((a, b) => b - a);
    const [res] = arr;
    for (let j = 0; j < arr.length; j++) {
      const d = Math.sqrt(arr[j]);
      if (d !== parseInt(d)) {
        return arr[j];
      }
    }
    return res;
  },
};
