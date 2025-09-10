module.exports = {
  isItPossibleToConstructStr: (target, substrs) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < substrs.length; j++) {
      if (substrs[j] === target) {
        return 'YES';
      }
      c1 += substrs[j][1] === target[0];
      c2 += substrs[j][0] === target[1];
    }
    return c1 && c2 ? 'YES' : 'NO';
  },
};
