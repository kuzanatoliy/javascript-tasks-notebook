function bisect(target, arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);

    if (arr[mid] < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  const sm = s === 0 ? Infinity : target - arr[s - 1];
  const bg = s === arr.length ? Infinity : arr[s] - target;

  return sm < bg ? sm : bg;
}

module.exports = {
  getMinValue: (arr, k) => {
    if (k > 2n) {
      return 0n;
    }
    arr.sort((a, b) => Number(a - b));
    let [min] = arr;
    for (let j = 1; j < arr.length; j++) {
      const dif = arr[j] - arr[j - 1];
      if (dif < min) {
        min = dif;
      }
    }
    if (k === 2n) {
      for (let j = 0; j < arr.length; j++) {
        for (let jj = j + 1; jj < arr.length; jj++) {
          const d = arr[jj] - arr[j];
          const diff = bisect(d, arr);
          min = diff < min ? diff : min;
        }
      }
    }
    return min;
  },
};
