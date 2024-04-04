module.exports = {
  getMaxInteger: (str) => {
    const temp = [];
    for (let j = 0; j < str.length; j++) {
      switch (str[j]) {
        case '0':
        case '1':
          break;
        case '2':
          temp.push(2);
          break;
        case '3':
          temp.push(3);
          break;
        case '4':
          temp.push(3);
          temp.push(2);
          temp.push(2);
          break;
        case '5':
          temp.push(5);
          break;
        case '6':
          temp.push(5);
          temp.push(3);
          break;
        case '7':
          temp.push(7);
          break;
        case '8':
          temp.push(7);
          temp.push(2);
          temp.push(2);
          temp.push(2);
          break;
        case '9':
          temp.push(7);
          temp.push(3);
          temp.push(3);
          temp.push(2);
          break;
      }
    }
    return temp.sort((a, b) => b - a).join('');
  },
};
