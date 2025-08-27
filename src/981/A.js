module.exports = {
  getWordLength: (str) => {
    const temp = str.split('');
    while (temp.join('') === temp.reverse().join('') && temp.length) {
      temp.pop();
    }
    return temp.length;
  },
};
