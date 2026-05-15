module.exports = {
  getCountOfFrames: (arr) => {
    const counts = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j]]++;
    }
    return Math.floor(counts.reduce((a, b) => a + Math.floor(b / 2), 0) / 2);
  },
};
