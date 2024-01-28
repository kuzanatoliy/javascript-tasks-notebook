function longest(k, str, c) {
  let max = 0;
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== c) {
      k -= 1;
    }
    while (k < 0) {
      if (str[p] !== c) {
        k += 1;
      }
      p += 1;
    }
    max = Math.max(max, i - p + 1);
  }
  return max;
}

module.exports = {
  getLongestSubstring: (count, string) =>
    Math.max(longest(count, string, 'a'), longest(count, string, 'b')),
};
