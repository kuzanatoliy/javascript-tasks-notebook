module.exports = {
  getOrder: (arr) => {
    arr.unshift(0);
    const res = [arr.length];
    let next = arr.length - 1;
    while (next) {
      res.push(arr[next]);
      next = arr[next] - 1;
    }
    return res.reverse();
  },
};
