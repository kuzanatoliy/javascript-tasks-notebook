module.exports = {
  getPermutation: (num) => {
    const perm = new Array(num).fill(0).map((_, ind) => ind + 1);
    let sum = 1;
    for (let j = 1; j < perm.length; j++) {
      const d = Math.sqrt(sum);
      sum += perm[j];
      if (Math.floor(d) === Math.ceil(d)) {
        const temp = perm[j - 1];
        perm[j - 1] = perm[j];
        perm[j] = temp;
      }
    }
    const ans = Math.sqrt(sum);
    return Math.floor(ans) === Math.ceil(ans) ? [-1] : perm;
  },
};
