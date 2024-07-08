const MOD = 1000000007;

module.exports = {
  getCountOfStrings: (string) => {
    let restrictedChars = false;

    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'm' || string[i] === 'w') {
        restrictedChars = true;
      }
    }

    if (restrictedChars) {
      return 0;
    } else {
      const dp = Array(string.length + 1);

      dp[0] = 1;
      dp[1] = 1;

      for (let i = 2; i <= string.length; i++) {
        dp[i] = dp[i - 1];
        if (
          string[i - 1] === string[i - 2] &&
          (string[i - 1] === 'u' || string[i - 1] === 'n')
        ) {
          dp[i] = (dp[i] + dp[i - 2]) % MOD;
        }
      }

      return dp[string.length];
    }
  },
};
