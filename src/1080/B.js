module.exports = {
  getAnswers: (queries) => {
    const res = [];
    for (let j = 0; j < queries.length; j++) {
      res.push(
        Math.ceil(queries[j][1] / 2) * (-1) ** queries[j][1] -
          Math.ceil((queries[j][0] - 1) / 2) * (-1) ** (queries[j][0] - 1)
      );
    }
    return res;
  },
};
