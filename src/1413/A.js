module.exports = {
  getKeys: (array) => {
    const arr = array.reverse();
    for (let j = 0; j < arr.length / 2; j++) {
      arr[j] = -arr[j];
    }
    return arr;
  },
};
