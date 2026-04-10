module.exports = {
  getRedTotalArea: (arr) => {
    let area = 0;
    arr.sort((a, b) => b - a);
    for (let j = 0; j < arr.length; j++) {
      area += arr[j] * arr[j] * Math.PI * (j % 2 ? -1 : 1);
    }
    return area;
  },
};
