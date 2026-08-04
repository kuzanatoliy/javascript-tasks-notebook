module.exports = {
  groupByAnagrama: (arr) => {
    const store = {};
    for (let j = 0; j < arr.length; j++) {
      const key = arr[j].split('').sort().join('');
      if (store[key]) {
        store[key].push(arr[j]);
      } else {
        store[key] = [arr[j]];
      }
    }
    return Object.values(store);
  },
};
