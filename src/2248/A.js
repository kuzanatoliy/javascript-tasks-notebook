module.exports = {
  transformString: (str) => {
    let temp = str;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === '0') {
        temp = temp.slice(0, j) + temp.slice(j + 1);
        break;
      }
    }
    for (let jj = 0; jj < temp.length; jj++) {
      if (temp[jj] === '1') {
        temp = temp.slice(0, jj) + temp.slice(jj + 1);
        break;
      }
    }
    return temp;
  },
};
