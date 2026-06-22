module.exports = {
  chooseLaptop: (laptops) => {
    const temp = laptops.map((item, ind) => [item, ind, 1]);
    for (let j = 0; j < temp.length; j++) {
      if (!temp[j][2]) {
        continue;
      }
      for (let jj = 0; jj < temp.length; jj++) {
        if (
          temp[j][0][0] > temp[jj][0][0] &&
          temp[j][0][1] > temp[jj][0][1] &&
          temp[j][0][2] > temp[jj][0][2]
        ) {
          temp[jj][2] = 0;
        }
      }
    }
    return (
      temp.filter((item) => item[2]).sort((a, b) => a[0][3] - b[0][3])[0][1] + 1
    );
  },
};
