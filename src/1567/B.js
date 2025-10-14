const store = [0];

module.exports = {
  getArrayLength: (a, b) => {
    if (!store[a - 1]) {
      let xor = store[store.length - 1];
      for (let j = store.length; j < a; j++) {
        xor ^= j;
        store.push(xor);
      }
    }
    const baseX = store[a - 1] ^ b;
    if (baseX === 0) {
      return a;
    } else if (a === baseX) {
      return a + 2;
    } else {
      return a + 1;
    }
  },
};
