/* eslint-disable no-undefined */
module.exports = {
  getCountOfBirds: (arr, steps) => {
    for (let j = 0; j < steps.length; j++) {
      const c = arr[steps[j][0] - 1];
      const c1 = c - steps[j][1];
      const c2 = steps[j][1] - 1;
      if (arr[steps[j][0] - 2] !== undefined) {
        arr[steps[j][0] - 2] += c2;
      }
      if (arr[steps[j][0]] !== undefined) {
        arr[steps[j][0]] += c1;
      }
      arr[steps[j][0] - 1] = 0;
    }
    return arr;
  },
};
