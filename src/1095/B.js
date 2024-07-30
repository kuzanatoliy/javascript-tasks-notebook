module.exports = {
  getMinInstability: (array) => {
    if (array.length === 2) {
      return 0;
    }
    if (array.length === 3) {
      return Math.min(
        Math.abs(array[0] - array[1]),
        Math.abs(array[1] - array[2]),
        Math.abs(array[0] - array[2])
      );
    }
    let mini = 0;
    let maxi = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[mini] >= array[j]) {
        mini = j;
      }
      if (array[maxi] <= array[j]) {
        maxi = j;
      }
    }
    let minj = mini === 0 ? 1 : 0;
    let maxj = maxi === 0 ? 1 : 0;
    for (let j = 1; j < array.length; j++) {
      if (j === mini || j === maxi) {
        continue;
      }
      if (array[minj] >= array[j]) {
        minj = j;
      }
      if (array[maxj] <= array[j]) {
        maxj = j;
      }
    }
    return Math.min(array[maxi] - array[minj], array[maxj] - array[mini]);
  },
};
