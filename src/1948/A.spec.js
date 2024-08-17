const { isItPossibleToConstructString } = require('./A');

describe('1948A. Special Characters', () => {
  it.each`
    n    | number | result
    ${1} | ${6}   | ${['YES', 'AABBCC']}
    ${2} | ${1}   | ${['NO']}
    ${3} | ${2}   | ${['YES', 'AA']}
  `('Base test: $n', ({ number, result }) => {
    expect(isItPossibleToConstructString(number)).toStrictEqual(result);
  });
});
