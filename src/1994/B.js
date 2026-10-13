module.exports = {
  isItPossibleToTransform: (origin, target) => {
    for (let j = 0; j < origin.length; j++) {
      if (origin[j] === '0' && target[j] === '1') {
        return 'NO';
      }
      if (origin[j] === '1') {
        break;
      }
    }
    return 'YES';
  },
};
