module.exports = {
  transformArray: (arr) => {
    const res = [...arr];
    let s1 = arr[arr.length - 1];
    let s2 = 0;
    for (let j = 1; j < arr.length; j++) {
      const ind = arr.length - j - 1;
      if (j % 2 === 0) {
        res[ind] = arr[ind] - s1 + s2;
        s1 += res[ind];
      } else {
        res[ind] = arr[ind] - s2 + s1;
        s2 += res[ind];
      }
    }
    return res;
  },
};
