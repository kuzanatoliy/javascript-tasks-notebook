module.exports = {
  getSubstring: (string) => {
    const substr = [];
    for (let i = 0; i < string.length; i += 2) {
      substr.push(string[i]);
    }
    substr.push(string.at(-1));
    return substr.join('');
  },
};
