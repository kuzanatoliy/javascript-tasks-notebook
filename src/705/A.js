module.exports = {
  checkHulkAnswer: (number) => {
    const temp = [];
    for (let i = 0; i < number; i++) {
      temp.push(i % 2 === 1 ? 'I love' : 'I hate');
    }
    return `${temp.join(' that ')} it`;
  },
};
