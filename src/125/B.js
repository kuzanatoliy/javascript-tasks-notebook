module.exports = {
  transformXML: (text) => {
    const res = [];
    let temp = '';
    let op = 0;
    let d = 0;
    for (let j = 0; j < text.length; j++) {
      switch (text[j]) {
        case '/':
          op = 1;
          temp += '/';
          break;
        case '>':
          if (op) {
            d--;
          }
          res.push(`${new Array(d).fill('  ').join('') + temp}>`);
          temp = '';
          if (!op) {
            d++;
          }
          op = 0;
          break;
        default:
          temp += text[j];
      }
    }
    return res;
  },
};
