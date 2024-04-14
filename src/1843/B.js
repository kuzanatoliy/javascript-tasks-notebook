module.exports = {
  getParams: (array) => {
    let sum = Math.abs(array[0]);
    let count = array[0] < 0 ? 1 : 0;
    let flag = count;
    for (let j = 1; j < array.length; j++) {
      sum += Math.abs(array[j]);
      if (!flag && array[j] < 0) {
        count++;
        flag = true;
      }
      if (array[j] > 0) {
        flag = false;
      }
    }
    return [sum, count];
  },
};
