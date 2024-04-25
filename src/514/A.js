module.exports = {
  getMinNumber: (strNum) => {
    let j = 0;
    let tempStr = '';
    if (strNum[0] === '9') {
      tempStr += strNum[0];
      j++;
    }

    for (; j < strNum.length; j++) {
      tempStr += +strNum[j] > 4 ? 9 - strNum[j] : strNum[j];
    }
    return tempStr;
  },
};
