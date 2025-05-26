module.exports = {
  getNextCity: (arr) => {
    let [min] = arr;
    let indexes = [0];
    for (let j = 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        indexes = [j];
      } else if (min === arr[j]) {
        indexes.push(j);
      }
    }
    return indexes.length === 1 ? indexes[0] + 1 : 'Still Rozdil';
  },
};
