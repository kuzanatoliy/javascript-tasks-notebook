module.exports = {
  getCountOfSubArrays: (array, k) => {
    const arr = [];
    for (let j = 0; j < array.length; j++) {
      arr.push(array[j] * 2);
    }
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      let c = 0;
      for (
        let jj = j + 1;
        jj <= j + k && jj < array.length && array[jj - 1] < arr[jj];
        jj++
      ) {
        c++;
      }
      if (k === c) {
        while (array[j + k - 1] < arr[j + k]) {
          count++;
          j++;
        }
        j += k - 1;
        continue;
      }
      j += c;
    }
    return count;
  },
};
