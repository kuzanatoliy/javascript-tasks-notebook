module.exports = {
  getCountOfDivisiblePairs: (array, x, y) => {
    const mp = new Map();
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      const ai1 = array[i] % x;
      const ai2 = array[i] % y;

      const key1 = (x - ai1) % x;
      const key2 = ai2;

      const pairCount = mp.get(`${key1},${key2}`) || 0;
      count += pairCount;

      const currentPair = `${ai1},${ai2}`;
      mp.set(currentPair, (mp.get(currentPair) || 0) + 1);
    }
    return count;
  },
};
