module.exports = {
  getCountOfOverMarks: (score, marks) => {
    let sum = marks.reduce((a, b) => a + b);
    let k = marks.length;
    while (Math.round(sum / k) < score) {
      sum += score;
      k++;
    }
    return k - marks.length;
  },
};
