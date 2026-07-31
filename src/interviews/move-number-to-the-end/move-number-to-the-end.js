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
};
