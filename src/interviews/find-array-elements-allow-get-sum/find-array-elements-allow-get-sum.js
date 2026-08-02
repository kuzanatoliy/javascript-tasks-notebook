module.exports = {
  findArrayElementsAllowGetSum: (arr, sum) => {
    const map = new Map();
    for (let j = 0; j < arr.length; j++) {
      if (map.has(arr[j])) {
        return [map.get(arr[j]), arr[j]];
      }
      map.set(sum - arr[j], arr[j]);
    }
    return -1;
  },
};
