module.exports = {
  getMinVolume: (array, x) => {
    const volumes = [array[0]];
    for (let j = 1; j < array.length; j++) {
      volumes.push(array[j] - array[j - 1]);
    }
    return Math.max(...volumes, (x - array[array.length - 1]) * 2);
  },
};
