module.exports = {
  isGoodPlay: (arr) => {
    const set = new Set();
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[0] === arr[j];
      set.add(arr[j]);
    }
    return set.size === 2 && count === arr.length / 2
      ? ['YES', Array.from(set)]
      : ['NO'];
  },
};
