module.exports = {
  hasSubsequence: (array) => {
    let ok = false;
    const freq = {};
    for (let i = 0; i < array.length; ++i) {
      if (Object.hasOwn(freq, array[i])) {
        if (i - freq[array[i]] > 1) {
          ok = true;
          break;
        }
      } else {
        freq[array[i]] = i;
      }
    }
    return ok ? 'YES' : 'NO';
  },
};
