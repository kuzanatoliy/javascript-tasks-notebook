module.exports = {
  buildArray: (arr) => {
    if (arr.length % 2) {
      return ['NO'];
    }
    arr.sort((a, b) => a - b);
    const d = arr.length / 2;
    const res = [];
    for (let j = 0; j < d; j++) {
      res.push(arr[j]);
      res.push(arr[j + d]);
      if (
        res[res.length - 2] === res[res.length - 3] ||
        res[res.length - 2] === res[res.length - 1]
      ) {
        return ['NO'];
      }
    }
    return ['YES', res];
  },
};
