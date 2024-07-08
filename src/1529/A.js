module.exports = {
  getCountOfRemovedElements: (array) => {
    const map = { [array[0]]: 1 };
    let [min] = array;

    for (let j = 1; j < array.length; j++) {
      map[array[j]] = (map[array[j]] || 0) + 1;
      if (min > array[j]) {
        min = array[j];
      }
    }
    return array.length - map[min];
  },
};
