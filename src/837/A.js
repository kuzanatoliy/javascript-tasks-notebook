module.exports = {
  getVolume: (text) => {
    let count = 0;
    let store = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[j] === ' ') {
        store = Math.max(store, count);
        count = 0;
      }
      count += text[j] >= 'A' && text[j] <= 'Z';
    }
    return Math.max(store, count);
  },
};
