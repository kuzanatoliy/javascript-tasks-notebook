module.exports = {
  getCountOfSteps: (l1, l2) => {
    const flgs = new Array(l1.length).fill(0);
    let count = 0;
    for (let j = 0; j < l1.length; j++) {
      if (l1[j] === '0' && l2[j] === '1') {
        count++;
        flgs[j] = 1;
        continue;
      }
      if (l1[j] === '1' && l2[j] === '1') {
        if (l1[j - 1] === '1' && !flgs[j - 1]) {
          count++;
          flgs[j - 1] = 1;
          continue;
        }
        if (l1[j + 1] === '1' && !flgs[j + 1]) {
          count++;
          flgs[j + 1] = 1;
          continue;
        }
      }
    }
    return count;
  },
};
