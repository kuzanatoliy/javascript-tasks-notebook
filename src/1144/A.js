module.exports = {
  isDiverseString: (str) => {
    const arr = str.split('').sort();
    for (let j = 1; j < str.length; j++) {
      if (arr[j].charCodeAt() - arr[j - 1].charCodeAt() !== 1) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
