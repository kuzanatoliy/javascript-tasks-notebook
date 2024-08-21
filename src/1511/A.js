module.exports = {
  getCountOfLikes: (array) => {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j] !== 2;
    }
    return sum;
  },
};
