module.exports = {
  isItPossibleToSplit: (arr) => {
    const px = [];
    const py = [];

    for (let j = 0; j < arr.length; j++) {
      px.push((arr[j] === 1 ? 1 : -1) + (px[j - 1] || 0));
      py.push((arr[j] === 3 ? -1 : 1) + (py[j - 1] || 0));
    }

    let minPy = Infinity;

    for (let r = 1; r <= arr.length - 2; r++) {
      const l = r - 1;
      if (px[l] >= 0 && py[l] < minPy) {
        minPy = py[l];
      }
      if (minPy <= py[r]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
