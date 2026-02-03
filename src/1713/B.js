module.exports = {
  isOptimalReduction: (arr) => {
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[max] < arr[j]) {
        max = j;
      }
    }
    const arrl = arr.slice(0, max);
    const arrr = arr.slice(max);
    for (let jj = 1; jj < arrl.length; jj++) {
      if (arrl[jj - 1] > arrl[jj]) {
        return 'NO';
      }
    }
    for (let jjj = 1; jjj < arrr.length; jjj++) {
      if (arrr[jjj - 1] < arrr[jjj]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
