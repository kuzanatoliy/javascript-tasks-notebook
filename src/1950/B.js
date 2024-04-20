module.exports = {
  getCheakerboard: (count) => {
    const res = [];
    const temp = [];

    for (let j = 0; j < count; j++) {
      if (j % 2 === 0) {
        temp.push('#');
        temp.push('#');
      } else {
        temp.push('.');
        temp.push('.');
      }
    }

    const str1 = temp.join('');
    const str2 = str1.slice(2, 4) + str1.slice(0, str1.length - 2);

    for (let jj = 0; jj < count; jj++) {
      if (jj % 2 === 0) {
        res.push(str1);
        res.push(str1);
      } else {
        res.push(str2);
        res.push(str2);
      }
    }

    return res;
  },
};
