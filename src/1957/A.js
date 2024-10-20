module.exports = {
  getCountOfPolygons: (array) => {
    const counts = new Array(101).fill(0);
    for (let j = 0; j < array.length; j++) {
      counts[array[j]]++;
    }
    let count = 0;
    for (let jj = 0; jj < counts.length; jj++) {
      count += Math.floor(counts[jj] / 3);
    }
    return count;
  },
};
