module.exports = {
  buildPermutation: (num) => {
    const fls = new Array(num).fill(false);
    const res = [];
    for (let j = 0; j < num; j++) {
      if (fls[j]) {
        continue;
      }
      let next = j + 1;
      while (next <= num) {
        fls[next - 1] = true;
        res.push(next);
        next *= 2;
      }
    }
    return res;
  },
};
