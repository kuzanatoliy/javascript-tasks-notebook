module.exports = {
  getCountOfVoices: (arr) => {
    let max = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
      sum += arr[j];
    }
    return Math.max(
      max,
      Math.ceil((sum * 2) / arr.length) + ((sum * 2) % arr.length === 0)
    );
  },
};
