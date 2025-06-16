module.exports = {
  transformPermutation: (arr) => {
    if (arr.length === 1) {
      return [-1];
    }
    const perm = [...arr].map((_, ind) => ind + 1);
    for (let j = 0; j < perm.length - 1; j++) {
      if (perm[j] === arr[j]) {
        const ans = perm[j];
        perm[j] = perm[j + 1];
        perm[j + 1] = ans;
      }
    }
    if (perm[perm.length - 1] === arr[perm.length - 1]) {
      const ans = perm[perm.length - 1];
      perm[perm.length - 1] = perm[perm.length - 2];
      perm[perm.length - 2] = ans;
    }
    return perm;
  },
};
