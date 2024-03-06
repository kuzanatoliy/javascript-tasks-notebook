module.exports = {
  isItPossibleToDefeatTheDragon: (array) => {
    const temp = array[2] * 10;
    for (let j = 0; j < array[1] && array[0] > temp; j++) {
      array[0] = Math.floor(array[0] / 2) + 10;
    }
    array[0] -= temp;
    return array[0] > 0 ? 'NO' : 'YES';
  },
};
