module.exports = {
  getMaxCountOfClasses: (k, map) => {
    const arr = map.split('1');
    let count = arr[0].length;
    for (let j = 1; j < arr.length; j++) {
      count += Math.max(0, arr[j].length - k);
    }
    return count;
  },
};
