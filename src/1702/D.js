module.exports = {
  transformString: (str, weight) => {
    const temp = str
      .split('')
      .map((item, ind) => [item.charCodeAt() - 96, ind])
      .sort((a, b) => a[0] - b[0]);
    let sum = 0;
    for (let j = 0; j < temp.length; j++) {
      sum += temp[j][0];
      if (sum > weight) {
        temp.length = j;
      }
    }
    return temp
      .sort((a, b) => a[1] - b[1])
      .map((item) => String.fromCharCode(item[0] + 96))
      .join('');
  },
};
