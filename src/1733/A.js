module.exports = {
  getMaxScore: (arr, k) => {
    const gr = new Array(k).fill(0).map(() => [0]);
    for (let j = 0; j < arr.length; j++) {
      gr[j % k].push(arr[j]);
    }
    return gr.map((item) => Math.max(...item)).reduce((a, b) => a + b, 0);
  },
};
