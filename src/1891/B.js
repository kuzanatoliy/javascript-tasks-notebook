module.exports = {
  transformArray: (arr, queries) => {
    const qSet = new Set(queries);
    for (const power of qSet) {
      const num = 2 ** power;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num === 0) {
          arr[i] += num / 2;
        }
      }
    }
    return arr;
  },
};
