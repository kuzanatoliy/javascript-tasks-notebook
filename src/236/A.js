module.exports = {
  canChat: (word) => {
    const set = new Set();
    for (let i = 0; i < word.length; i++) {
      set.add(word[i]);
    }
    return set.size % 2 === 0 ? 'CHAT WITH HER!' : 'IGNORE HIM!';
  },
};
