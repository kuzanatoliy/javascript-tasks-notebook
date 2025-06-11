module.exports = {
  isItPossibleToTransform: (snum) => {
    let ans = '';
    for (let j = 0; j < snum.length; j++) {
      if (
        snum[j] === '1' ||
        snum[j] === '3' ||
        snum[j] === '5' ||
        snum[j] === '7' ||
        snum[j] === '9'
      ) {
        ans += snum[j];
      }
    }
    if (ans.length < 2) {
      return -1;
    }
    return ans[0] + ans[1];
  },
};
