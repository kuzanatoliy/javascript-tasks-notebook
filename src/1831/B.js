module.exports = {
  getMaxSubstrLength: (arrA, arrB) => {
    const mapA = { [arrA[0]]: 1 };
    let curr = 1;
    for (let a = 1; a < arrA.length; a++) {
      if (arrA[a] !== arrA[a - 1]) {
        curr = 1;
      } else {
        curr++;
      }
      mapA[arrA[a]] = Math.max(mapA[arrA[a]] || 0, curr);
    }
    const mapB = { [arrB[0]]: 1 };
    curr = 1;
    for (let b = 1; b < arrB.length; b++) {
      if (arrB[b] !== arrB[b - 1]) {
        curr = 1;
      } else {
        curr++;
      }
      mapB[arrB[b]] = Math.max(mapB[arrB[b]] || 0, curr);
    }
    Object.keys(mapB).forEach((item) => {
      mapA[item] = (mapA[item] || 0) + (mapB[item] || 0);
    });
    let max = 0;
    Object.keys(mapA).forEach((item) => {
      if (mapA[item] > max) {
        max = mapA[item];
      }
    });
    return max;
  },
};
