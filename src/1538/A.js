module.exports = {
  getCountOfOperations: (array) => {
    let minId = 0;
    let maxId = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[minId] > array[j]) {
        minId = j;
      }
      if (array[maxId] < array[j]) {
        maxId = j;
      }
    }
    const minL = minId + 1;
    const maxL = maxId + 1;
    const minR = array.length - minId;
    const maxR = array.length - maxId;
    return Math.min(
      Math.max(minL, maxL),
      Math.max(minR, maxR),
      minL + maxR,
      maxL + minR
    );
  },
};
