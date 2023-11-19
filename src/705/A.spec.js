const { checkHulkAnswer } = require('./A');

describe('705A. Hulk', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${'I hate it'}
    ${2} | ${2}   | ${'I hate that I love it'}
    ${3} | ${3}   | ${'I hate that I love that I hate it'}
  `('Base test: $n', ({ number, result }) => {
    expect(checkHulkAnswer(number)).toBe(result);
  });
});
