module.exports = {
  concat: (...vals) => {
    const res = [];
    for (let j = 0; j < vals.length; j++) {
      if (Array.isArray(vals[j])) {
        for (let jj = 0; jj < vals[j].length; jj++) {
          res.push(vals[j][jj]);
        }
      } else {
        res.push(vals[j]);
      }
    }
    return res;
  },
};
