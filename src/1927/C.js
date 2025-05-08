module.exports = {
  isItPossibleToConstruct: (arr1, arr2, k) => {
    const fls = new Array(k + 1).fill(0);
    let c1 = 0;
    let c = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] <= k && !fls[arr1[j]]) {
        fls[arr1[j]] = 1;
        c1++;
        c++;
      }
    }
    let c2 = 0;
    for (let jj = 0; jj < arr2.length; jj++) {
      if (arr2[jj] <= k && fls[arr2[jj]] < 2) {
        if (fls[arr2[jj]]) {
          c1--;
        } else {
          c2++;
          c++;
        }
        fls[arr2[jj]] += 2;
      }
    }
    const h = k / 2;
    return c1 <= h && c2 <= h && c === k ? 'YES' : 'NO';
  },
};
