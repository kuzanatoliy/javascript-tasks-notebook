module.exports = {
  getTime: (keyboard, word) => {
    const cache = {};
    for (let j = 0; j < keyboard.length; j++) {
      cache[keyboard[j]] = j;
    }
    let sum = 0;
    for (let j = 1; j < word.length; j++) {
      sum += Math.abs(cache[word[j]] - cache[word[j - 1]]);
    }
    return sum;
  },
};
