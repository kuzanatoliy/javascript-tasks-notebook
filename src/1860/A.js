module.exports = {
  transformString: (str) => {
    if (str === '()') {
      return ['NO'];
    }
    const c1 = new Array(str.length).fill('()').join('');
    if (c1.indexOf(str) === -1) {
      return ['YES', c1];
    }
    return [
      'YES',
      new Array(str.length).fill('(').join('') +
        new Array(str.length).fill(')').join(''),
    ];
  },
};
