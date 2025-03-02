module.exports = {
  isGoodPerformer: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] >= 2400 && arr[j][1] > arr[j][0]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
