module.exports = {
  getCountOfGroups: (arr) => {
    let [m] = arr;
    for (let j = 1; j < arr.length; j += 1) {
      m &= arr[j];
    }
    let [curr] = arr;
    let count = 0;
    for (let z = 1; z < arr.length; z += 1) {
      if (curr === m) {
        curr = arr[z];
        count += 1;
      } else {
        curr &= arr[z];
      }
    }
    if (curr === m) {
      count += 1;
    }
    return m === 0 ? count : 1;
  },
};
