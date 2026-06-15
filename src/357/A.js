module.exports = {
  getBorder: (arr, x, y) => {
    let g1 = 0;
    let g2 = arr.reduce((a, b) => a + b, 0);
    for (let j = 0; j < arr.length; j++) {
      g1 += arr[j];
      g2 -= arr[j];
      if (g1 >= x && g1 <= y && g2 >= x && g2 <= y) {
        return j + 2;
      }
    }
    return 0;
  },
};
