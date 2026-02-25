const { getCountOfOperations } = require('./A');

describe('672B. Different is Good', () => {
  it.each`
    n    | str        | result
    ${1} | ${'aa'}    | ${'1'}
    ${2} | ${'koko'}  | ${'2'}
    ${3} | ${'murat'} | ${'0'}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
