module.exports = {
  isItPossibleToReport: (items) => {
    const arr = new Array(105).fill(0);
    for (let i = 0; i < items.length; i++) {
      arr[items[i]]++;
    }
    for (let i = 1; i <= 100; i++) {
      if (arr[i] > arr[i - 1]) {
        return 'NO';
      }
    }

    return 'YES';
  },
};
