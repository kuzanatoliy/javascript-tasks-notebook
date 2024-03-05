const { getLetter } = require('./B');

describe('1915B. Not Quite Latin Square', () => {
  it.each`
    n    | numbers                  | result
    ${1} | ${['ABC', 'C?B', 'BCA']} | ${'A'}
    ${2} | ${['BCA', 'CA?', 'ABC']} | ${'B'}
    ${3} | ${['?AB', 'BCA', 'ABC']} | ${'C'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getLetter(numbers)).toBe(result);
  });
});
