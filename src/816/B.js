/* eslint-disable complexity */
module.exports = {
  getCountOfAdmissibleTemperatures: (advices, questions, k) => {
    const admissible = new Array(200001).fill(0);
    const result = new Array(200001).fill(0);
    let min = 200000;
    let max = 0;
    for (let i = 0; i <= 200001; i++) {
      admissible.push(0);
      result.push(0);
    }
    for (let i = 0; i < advices.length; i++) {
      const [a, b] = advices[i];
      admissible[a]++;
      admissible[b + 1]--;
      if (a < min) {
        min = a;
      }
      if (b > max) {
        max = b;
      }
    }
    for (let i = min; i <= 200001; i++) {
      admissible[i] += admissible[i - 1];
      result[i] += result[i - 1];
      if (admissible[i] >= k) {
        result[i]++;
      }
    }
    const res = [];
    for (let i = 0; i < questions.length; i++) {
      const [a, b] = questions[i];
      res.push(result[b] - result[a - 1]);
    }
    return res;
  },
};
