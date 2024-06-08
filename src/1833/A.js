module.exports = {
  getCountOfSounds: (string) => {
    const set = new Set();
    for (let j = 1; j < string.length; j++) {
      set.add(`${string[j - 1]}${string[j]}`);
    }
    return set.size;
  },
};
