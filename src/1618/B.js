module.exports = {
  getOriginalString: (bigrams) => {
    let [str] = bigrams;
    for (let j = 1; j < bigrams.length - 1; j++) {
      str += str[str.length - 1] === bigrams[j][0] ? bigrams[j][1] : bigrams[j];
    }
    str +=
      str.length === bigrams.length
        ? bigrams[bigrams.length - 1]
        : bigrams[bigrams.length - 1][1];
    return str;
  },
};
