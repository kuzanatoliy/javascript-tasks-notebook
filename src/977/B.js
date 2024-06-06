module.exports = {
  getSubString: (string) => {
    const store = {};
    for (let j = 1; j < string.length; j++) {
      const key = `${string[j - 1]}${string[j]}`;
      store[key] = (store[key] || 0) + 1;
    }
    const keys = Object.keys(store);
    let max = 0;
    let resKey = '';
    for (let j = 0; j < keys.length; j++) {
      if (store[keys[j]] > max) {
        max = store[keys[j]];
        resKey = keys[j];
      }
    }
    return resKey;
  },
};
