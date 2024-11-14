module.exports = {
  isItPossibleToGroup: (array) => {
    const arr = array.sort((a, b) => b - a);
    let x = 0;
    let y = 0;
    for (let j = 0; j < arr.length; j++) {
      if (x < y) {
        x += arr[j];
      } else {
        y += arr[j];
      }
    }
    return x === y ? 'YES' : 'NO';
  },
};
