module.exports = {
  moveNumberToTheEndV1: (arr, target = 0) => {
    const first = [];
    const last = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === target) {
        last.push(arr[j]);
      } else {
        first.push(arr[j]);
      }
    }
    return [...first, ...last];
  },

  moveNumberToTheEndV2: (arr, target = 0) => {
    let l = 0;
    while (arr[l] !== target) {
      l++;
    }
    for (let j = l + 1; j < arr.length; j++) {
      if (arr[j] !== target) {
        arr[l] = arr[j];
        arr[j] = target;
        l++;
      }
    }
    return arr;
  },
};
