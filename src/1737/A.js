module.exports = {
  getMexWord: (str, k) => {
    const counts = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      counts[str[j].charCodeAt() - 97]++;
    }
    const booksCounter = str.length / k;
    let ans = '';
    for (let i = 0; i < k; i++) {
      let MEXIndex = 0;
      for (MEXIndex = 0; MEXIndex < booksCounter; MEXIndex++) {
        if (counts[MEXIndex] === 0) {
          break;
        }
        counts[MEXIndex]--;
      }
      ans += String.fromCharCode(97 + MEXIndex);
    }
    return ans;
  },
};
