module.exports = {
  getLengthOfGoodLongestSubstr: (str, k) => {
    const arr = new Array(k).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str[j].charCodeAt() - 65]++;
    }
    return Math.min(...arr) * k;
  },
};
