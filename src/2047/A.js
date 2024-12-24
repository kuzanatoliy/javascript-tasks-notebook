module.exports = {
  getCountOfHappyDays: (array) => {
    let count = 0;
    let store = 1;
    let step = 2;
    for (let j = 0; j < array.length; j++) {
      store -= array[j];
      while (store < 0) {
        store += step * 4;
        step += 2;
      }
      if (store === 0) {
        count++;
      }
    }
    return count;
  },
};
