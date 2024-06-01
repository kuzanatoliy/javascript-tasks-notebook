module.exports = {
  isItPossibleToTransform: (arrayA, arrayB) => {
    const temp = [];
    const temp0 = [];
    for (let j = 0; j < arrayA.length; j++) {
      if (arrayB[j] > 0) {
        temp.push(arrayA[j] - arrayB[j]);
      } else {
        temp0.push(arrayA[j]);
      }
    }
    if (temp.length === 0) {
      return 'YES';
    }
    if (temp[0] < 0) {
      return 'NO';
    }
    for (let j = 1; j < temp.length; j++) {
      if (temp[j] !== temp[j - 1]) {
        return 'NO';
      }
    }
    for (let j = 0; j < temp0.length; j++) {
      if (temp0[j] > temp[0]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
