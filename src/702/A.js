module.exports = {
  getLengthOfMaxSubArray: (array) => {
    let length = 1;
    let maxLength = 1;
    for (let j = 1; j < array.length; j++) {
      if (array[j] > array[j - 1]) {
        length++;
      } else {
        maxLength = Math.max(length, maxLength);
        length = 1;
      }
    }
    return Math.max(length, maxLength);
  },
};
