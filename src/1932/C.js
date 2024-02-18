module.exports = {
  getMods: (mod, array, operations) => {
    let l = 0;
    let r = array.length;
    for (let j = 0; j < operations.length; j++) {
      if (operations[j] === 'L') {
        l++;
      }
      if (operations[j] === 'R') {
        r--;
      }
    }
    l--;
    let p = 1;
    const res = [];
    for (let j = operations.length - 1; j >= 0; j--) {
      if (operations[j] === 'L') {
        p = (p * array[l]) % mod;
        l--;
        res.push(p);
      }
      if (operations[j] === 'R') {
        p = (p * array[r]) % mod;
        r++;
        res.push(p);
      }
    }
    return res.reverse();
  },
};
