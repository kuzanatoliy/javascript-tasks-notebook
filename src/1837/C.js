module.exports = {
  getBestBinaryString: (str) => {
    const mapStr = str.split('');
    for (let j = 1; j < mapStr.length; j++) {
      if (mapStr[j] === '?') {
        mapStr[j] = mapStr[j - 1];
      }
    }
    for (let j = mapStr.length - 2; j >= 0; j--) {
      if (mapStr[j] === '?') {
        mapStr[j] = mapStr[j + 1];
      }
    }
    const newStr = mapStr.join('');
    return newStr === str && str[0] === '?'
      ? new Array(str.length).fill('0').join('')
      : newStr;
  },
};
