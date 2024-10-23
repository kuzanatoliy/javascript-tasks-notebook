module.exports = {
  getLexicographicallySmallestString: (str, array, mutation) => {
    const arr = array.sort((a, b) => a - b);
    const mut = mutation.split('').sort();
    const or = str.split('');
    let l = 0;
    let r = arr.length - 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j + 1]) {
        or[arr[j] - 1] = mut[r];
        r--;
      } else {
        or[arr[j] - 1] = mut[l];
        l++;
      }
    }
    return or.join('');
  },
};
