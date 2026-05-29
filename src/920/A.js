module.exports = {
  getDelay: (num, arr) => {
    arr.sort((a, b) => a - b);
    const difs = [];
    for (let j = 1; j < arr.length; j++) {
      difs.push(Math.ceil((arr[j] - arr[j - 1] - 1) / 2));
    }
    return 1 + Math.max(arr[0] - 1, num - arr[arr.length - 1], ...difs);
  },
};
