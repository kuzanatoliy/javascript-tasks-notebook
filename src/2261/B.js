module.exports = {
  getMaxDelicacy: (arr) => {
    let mn = 1e9;
    let mx = 0;

    for (let j = 0; j < arr.length; j++) {
      const x = arr[j];
      if (x < mn) {
        mn = x;
      }
      if (x > mx) {
        mx = x;
      }
    }

    const k = 32 - Math.clz32(mn ^ mx);
    return mx | ((1 << k) - 1);
  },
};
