module.exports = {
  getBand: (arr) => {
    let [sum] = arr;
    let [bSum] = arr;
    const d = arr[0] / 2;
    const inds = [1];
    for (let j = 1; j < arr.length; j++) {
      sum += arr[j];
      if (arr[j] <= d) {
        inds.push(j + 1);
        bSum += arr[j];
      }
    }
    return bSum > sum / 2 ? inds : [];
  },
};
