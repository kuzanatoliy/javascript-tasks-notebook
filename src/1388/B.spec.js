const { getMinNumber } = require('./B');

describe('1388B. Captain Flint and a Long Voyage', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'8'}
    ${2} | ${3} | ${'998'}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinNumber(num)).toStrictEqual(result);
  });
});
