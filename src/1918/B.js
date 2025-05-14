module.exports = {
  transformArrays: (arr1, arr2) => {
    const x = Array(arr1.length).fill(0);
    const y = Array(arr1.length).fill(0);
    for (let i = 0; i < arr1.length; i++) {
      const pos1 = arr1[i] - 1;
      const pos2 = arr2[i] - 1;
      if (x[pos1] === 0) {
        x[pos1] = arr1[i];
        y[pos1] = arr2[i];
      } else {
        x[pos2] = arr1[i];
        y[pos2] = arr2[i];
      }
    }
    return [x, y];
  },
};
