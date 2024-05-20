module.exports = {
  getCountOfPairs: (array) => {
    for (let j = 0; j < array.length; j++) {
      array[j] -= j;
    }
    const map = new Map();
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      const temp = map.get(array[j]);
      if (temp) {
        count += temp;
        map.set(array[j], temp + 1);
        continue;
      }
      map.set(array[j], 1);
    }
    return count;
  },
};
