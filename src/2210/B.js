module.exports = {
  getCountOfChairs: (arr) => {
    const unique = new Set();
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      if (unique.has(j + 1)) {
        max = Math.max(max, unique.size);
        unique.delete(j + 1);
      }
      unique.add(arr[j]);
    }
    return Math.max(max, unique.size);
  },
};
