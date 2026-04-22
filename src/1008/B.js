/* eslint-disable prefer-destructuring */
module.exports = {
  isItPossibleToTransform: (rectangles) => {
    let prev = Math.max(...rectangles[0]);
    for (let j = 1; j < rectangles.length; j++) {
      const temp = [];
      if (rectangles[j][0] <= prev) {
        temp.push([prev - rectangles[j][0], rectangles[j][0]]);
      }
      if (rectangles[j][1] <= prev) {
        temp.push([prev - rectangles[j][1], rectangles[j][1]]);
      }
      if (temp.length) {
        temp.sort((a, b) => a[0] - b[0]);
        prev = temp[0][1];
      } else {
        return 'NO';
      }
    }
    return 'YES';
  },
};
