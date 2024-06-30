module.exports = {
  getCountOfNumbers: (number) => {
    const set = new Set();
    let j = 1;
    let d = j * j;
    while (d <= number) {
      set.add(d);
      const d2 = d * j;
      if (d2 <= number) {
        set.add(d2);
      }
      j++;
      d = j * j;
    }
    return set.size;
  },
};
