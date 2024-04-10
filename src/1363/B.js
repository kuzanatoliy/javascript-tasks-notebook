module.exports = {
  getCountOfChanges: (string) => {
    let prevOneCount = 0;
    let prevZeroCount = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === '1') {
        prevOneCount++;
      } else {
        prevZeroCount++;
      }
    }
    let followOneCount = 0;
    let followZeroCount = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === '1') {
        prevOneCount--;
        followOneCount++;
      } else {
        prevZeroCount--;
        followZeroCount++;
      }
      ans = Math.min(
        ans,
        prevOneCount + followZeroCount,
        prevZeroCount + followOneCount
      );
    }
    return ans;
  },
};
