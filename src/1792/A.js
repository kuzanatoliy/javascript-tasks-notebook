module.exports = {
  getCountOfActions: (array) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      count += array[j] === 1;
    }
    return array.length - Math.floor(count / 2);
  },
};
