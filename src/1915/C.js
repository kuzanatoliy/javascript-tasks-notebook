module.exports = {
  isItPossibleToCreateSquare: (array) => {
    let temp = 0;
    for (let j = 0; j < array.length; j++) {
      temp += array[j];
    }
    temp = Math.sqrt(temp);
    return temp - Math.trunc(temp) === 0 ? 'YES' : 'NO';
  },
};
