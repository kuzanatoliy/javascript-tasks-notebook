module.exports = {
  isItPossibleToReorderArray: (array) => {
    const map = new Map();
    for (let j = 0; j < array.length; j++) {
      if (!map.has(array[j])) {
        map.set(array[j], 1);
      } else {
        map.set(array[j], map.get(array[j]) + 1);
      }
    }
    if (map.size === 1) {
      return 'YES';
    }
    if (map.size === 2) {
      const arr = Array.from(map);
      return Math.abs(arr[0][1] - arr[1][1]) > 1 ? 'NO' : 'YES';
    }
    return 'NO';
  },
};
