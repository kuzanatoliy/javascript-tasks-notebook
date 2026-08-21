const { getMinAbount } = require('./A');

describe('1342A. Road To Zero', () => {
  it.each`
    n    | x    | y    | a      | b      | result
    ${1} | ${1} | ${3} | ${391} | ${555} | ${1337}
    ${2} | ${0} | ${0} | ${9}   | ${4}   | ${0}
  `('Base test: $n', ({ x, y, a, b, result }) => {
    expect(getMinAbount(x, y, a, b)).toBe(result);
  });
});
