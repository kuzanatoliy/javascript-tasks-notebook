module.exports = {
  restoreArr: (nums) => {
    const n = BigInt(nums.length);
    const res = [1n];
    let max = 1n;
    for (let h = 1; h < n; h++) {
      if (nums[h] - nums[h - 1] === 1n) {
        res.push(res[h - 1]);
        continue;
      }
      if (nums[h] - nums[h - 1] > h) {
        max++;
        res.push(max);
        continue;
      }
      res.push(res[BigInt(h) - (nums[h] - nums[h - 1])]);
    }
    return res;
  },
};
