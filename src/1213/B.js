module.exports = {
  getBadDaysCount: (arr) => {
    arr.reverse();
    let [min] = arr;
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (min < arr[j]) {
        count++;
      } else {
        min = arr[j];
      }
    }
    return count;
  },
};
