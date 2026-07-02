module.exports = {
  buildArray: (num) => {
    const arr = new Array(num).fill(0).map((_, ind) => ind + 1);
    return [...arr, ...arr, ...arr.slice(1), arr[0], ...arr];
  },
};
