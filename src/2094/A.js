module.exports = {
  getWord: (line) => {
    const ws = line.split(' ');
    let w = '';
    for (let j = 0; j < ws.length; j++) {
      w += ws[j][0];
    }
    return w;
  },
};
