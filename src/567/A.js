module.exports = {
  getMinMaxes: (arr) => {
    const res = [];
    res.push([
      Math.abs(arr[1] - arr[0]),
      Math.abs(arr[arr.length - 1] - arr[0]),
    ]);
    for (let i = 1; i < arr.length - 1; ++i) {
      const nearest = Math.min(
        Math.abs(arr[i] - arr[i - 1]),
        Math.abs(arr[i] - arr[i + 1])
      );
      const furthest = Math.max(
        Math.abs(arr[i] - arr[arr.length - 1]),
        Math.abs(arr[i] - arr[0])
      );

      res.push([nearest, furthest]);
    }
    res.push([
      Math.abs(arr[arr.length - 1] - arr[arr.length - 2]),
      Math.abs(arr[arr.length - 1] - arr[0]),
    ]);
    return res;
  },
};
