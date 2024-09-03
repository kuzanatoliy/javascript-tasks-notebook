/* eslint-disable yoda */
module.exports = {
  getCountOfDays: (nn, g, b) => {
    const goodBlocksReq = (nn + 1n) / 2n;
    const seasons = (goodBlocksReq - 1n) / g;
    const extraDays =
      0n > nn - goodBlocksReq - seasons * b
        ? 0n
        : nn - goodBlocksReq - seasons * b;

    let ans;
    ans = seasons * (g + b);
    ans += goodBlocksReq - seasons * g;
    ans += extraDays;
    return ans;
  },
};
