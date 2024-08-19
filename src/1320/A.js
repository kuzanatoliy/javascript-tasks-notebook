module.exports = {
  getMaximumBeautyOfJourney: (array) => {
    const arr = array.map((val, index) => val - index);
    const map = {};
    for (let j = 0; j < arr.length; j++) {
      map[arr[j]] = (map[arr[j]] || 0) + array[j];
    }
    let max = 0;
    Object.keys(map).forEach((item) => {
      if (map[item] > max) {
        max = map[item];
      }
    });
    return max;
  },
};
