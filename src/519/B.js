module.exports = {
  getNumbers: (errors) => {
    const temp = [];
    for (let j = 0; j < 3; j++) {
      temp[j] = {};
      errors[j].forEach((item) => {
        temp[j][item] = (temp[j][item] || 0) + 1;
      });
    }
    const res = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < errors[i].length; j++) {
        if (
          !temp[i + 1][errors[i][j]] ||
          temp[i + 1][errors[i][j]] !== temp[i][errors[i][j]]
        ) {
          res.push(errors[i][j]);
          break;
        }
      }
    }
    return res;
  },
};
