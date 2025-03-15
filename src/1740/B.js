module.exports = {
  getMinPerimeter: (slices) => {
    const a = [];
    const b = [];
    for (let j = 0; j < slices.length; j++) {
      a.push(slices[j][0]);
      b.push(slices[j][1]);
    }

    const maxA = Math.max(...a);
    const maxB = Math.max(...b);

    const height = Math.max(maxA, maxB);

    const width = a.reduce((prevVlue, currentValue, index) => {
      const minValue = Math.min(currentValue, b[index]);

      return prevVlue + minValue;
    }, 0);

    return height * 2 + width * 2;
  },
};
