module.exports = {
  transformLine: (line, m) => {
    m = Math.min(m, line.length);
    for (let j = 0; j < m; j++) {
      let nextStr = '';
      for (let jj = 0; jj < line.length; jj++) {
        const left = line[jj - 1] === '1' ? 1 : 0;
        const right = line[jj + 1] === '1' ? 1 : 0;
        nextStr += line[jj] === '1' || left + right === 1 ? '1' : '0';
      }
      line = nextStr;
    }
    return line;
  },
};
