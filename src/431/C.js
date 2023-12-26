const MOD = 1e9 + 7;

function pathCount2(dp, n, k, d) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k && i + j <= n; j++) {
      if (j < d) {
        dp[i + j][0] = ((dp[i + j][0] % MOD) + (dp[i][0] % MOD)) % MOD;
      } else {
        dp[i + j][1] = ((dp[i + j][1] % MOD) + (dp[i][0] % MOD)) % MOD;
      }
      dp[i + j][1] = ((dp[i + j][1] % MOD) + (dp[i][1] % MOD)) % MOD;
    }
  }
  return dp[n][1];
}

module.exports = {
  getCountOfNodes: (n, k, d) => {
    const dp = [];
    for (let i = 0; i < 105; i++) {
      dp.push([0, 0, 0]);
    }
    dp[0][0] = 1;
    return pathCount2(dp, n, k, d);
  },
};
