const { getIndexes } = require('./B');

describe('1605B. Reverse Sort', () => {
  it.each`
    n    | string       | result
    ${1} | ${'0011111'} | ${[]}
    ${2} | ${'10100'}   | ${[1, 3, 4, 5]}
    ${3} | ${'001000'}  | ${[3, 6]}
  `('Base test: $n', ({ string, result }) => {
    expect(getIndexes(string)).toStrictEqual(result);
  });
});
