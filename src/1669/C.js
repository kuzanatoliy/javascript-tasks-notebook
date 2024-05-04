module.exports = {
  isItPossibleToTransform: (array) => {
    let d = array[0] % 2;
    for (let j = 2; j < array.length; j += 2) {
      if (array[j] % 2 !== d) {
        return 'NO';
      }
    }
    d = array[1] % 2;
    for (let j = 3; j < array.length; j += 2) {
      if (array[j] % 2 !== d) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
