module.exports = {
  getResultOfComparing: (size1, size2) => {
    if (size1[size1.length - 1] === size2[size2.length - 1]) {
      if (size1.length === size2.length) {
        return '=';
      }
      if (size1[size1.length - 1] === 'S') {
        return size1.length > size2.length ? '<' : '>';
      }
      return size1.length < size2.length ? '<' : '>';
    }
    return size1[size1.length - 1] < size2[size2.length - 1] ? '>' : '<';
  },
};
