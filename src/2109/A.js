module.exports = {
  hasLiar: (arr) => {
    let [count] = arr;
    for (let j = 1; j < arr.length; j++) {
      count += arr[j];
      if (arr[j - 1] === 0 && arr[j] === 0) {
        return 'YES';
      }
    }
    return count === arr.length ? 'YES' : 'NO';
  },
};
