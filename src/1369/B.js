module.exports = {
  getCleanestString: (string) => {
    let cur = 0;
    let isDesc = false;
    while (cur + 1 < string.length) {
      if (string[cur] === '1' && string[cur + 1] === '0') {
        isDesc = true;
        break;
      }
      cur++;
    }

    if (isDesc) {
      let newstr = '';
      let leadZ = 0;
      while (leadZ < string.length && string[leadZ] === '0') {
        leadZ++;
      }
      leadZ++;
      let sufO = 0;
      while (sufO < string.length && string[string.length - 1 - sufO] === '1') {
        sufO++;
      }

      while (leadZ--) {
        newstr += '0';
      }
      while (sufO--) {
        newstr += '1';
      }

      return newstr;
    } else {
      return string;
    }
  },
};
