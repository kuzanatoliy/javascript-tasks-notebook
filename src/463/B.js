module.exports = {
  getCost: (arr) => {
    let [max] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    return max;
  },
};
