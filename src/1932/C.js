module.exports = {
  getMods: (mod, array, operations) => {
    let p = 1;
    for (let j = 0; j < array.length; j++) {
      p *= array[j];
    }
    const res = [p % mod];
    let l = 0;
    let r = array.length - 1;
    for (let j = 0; j < operations.length - 1; j++) {
      if (operations[j] === 'L') {
        p /= array[l];
        l++;
      }
      if (operations[j] === 'R') {
        p /= array[r];
        r--;
      }
      res.push(p % mod);
    }
    return res;
  },
};
