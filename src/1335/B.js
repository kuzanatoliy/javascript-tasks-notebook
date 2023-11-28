const BASE = 'a'.charCodeAt();

module.exports = {
  custruclString: (length, _sublength1, sublength2) => {
    const str = [];
    for (let j = 0; j < length; ) {
      for (let k = 0; j < length && k < sublength2; k++, j++) {
        str.push(String.fromCharCode(BASE + k));
      }
    }
    return str.join('');
  },
};
