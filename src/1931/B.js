module.exports = {
  isItPossibleToDoTheSame: (array) => {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
    }
    const d = sum / array.length;
    let store = 0;
    for (let j = 0; j < array.length; j++) {
      store += array[j] - d;
      if (store < 0) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
