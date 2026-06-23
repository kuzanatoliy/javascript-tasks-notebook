module.exports = {
  getTemperature: (arr) => {
    const d = arr[1] - arr[0];
    for (let j = 2; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] !== d) {
        return arr[arr.length - 1];
      }
    }
    return arr[arr.length - 1] + d;
  },
};
