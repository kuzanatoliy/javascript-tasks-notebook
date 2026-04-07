/* eslint-disable prefer-destructuring */
module.exports = {
  transformMessage: (words, message) => {
    const w = {};
    for (let j = 0; j < words.length; j++) {
      const temp = words[j].split(' ');
      w[temp[0]] = temp[0].length <= temp[1].length ? temp[0] : temp[1];
    }
    return message
      .split(' ')
      .map((item) => w[item])
      .join(' ');
  },
};
