module.exports = {
  transformPermutation: (arr) => {
    const l = [arr[0]];
    const r = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > l[l.length - 1]) {
        r.push(arr[j]);
      } else {
        l.push(arr[j]);
      }
    }
    return [...l.reverse(), ...r];
  },
};
