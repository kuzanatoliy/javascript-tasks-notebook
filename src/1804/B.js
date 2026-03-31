module.exports = {
  getMinCountOfPacks: (k, d, w, arr) => {
    let res = 0;
    let j = 0;
    let jj = 0;
    while (j < arr.length) {
      while (jj + j < arr.length && jj < k && arr[j] + d + w >= arr[jj + j]) {
        jj++;
      }
      res++;
      j += jj;
      jj = 0;
    }
    return res;
  },
};
