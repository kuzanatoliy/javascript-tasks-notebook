module.exports = {
  getPairs: (arr) => {
    const pairs = [];
    arr.sort((a, b) => a - b);
    const l = Math.floor(arr.length / 2);
    for (let j = 1; j < arr.length && pairs.length < l; j++) {
      pairs.push([arr[j], arr[0]]);
    }
    return pairs;
  },
};
