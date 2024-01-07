module.exports = {
  getDecryptedMessage: (message) => {
    let str = '';
    for (let i = 0; i < message.length; i++) {
      for (let ii = i + 1; ii < message.length; ii++) {
        if (message[i] === message[ii]) {
          str += message[ii];
          i = ii;
          break;
        }
      }
    }
    return str;
  },
};
