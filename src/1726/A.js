module.exports = {
  getDif: (arr) => {
    if (arr.length < 2) {
      return 0;
    }
    if (arr.length === 2) {
      return Math.abs(arr[1] - arr[0]);
    }
    const asIs = arr[arr.length - 1] - arr[0];
    const left = Math.max(...arr.slice(1)) - arr[0];
    const right =
      arr[arr.length - 1] - Math.min(...arr.slice(0, arr.length - 1));
    const pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
      pairs.push(arr[i] - arr[i + 1]);
    }
    return Math.max(asIs, left, right, ...pairs);
  },
};
