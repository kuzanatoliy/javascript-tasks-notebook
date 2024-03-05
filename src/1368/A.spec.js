const { getCountOfOperations } = require('./A');

describe('1368A. C+=', () => {
  it.each`
    n    | a    | b    | aim    | result
    ${1} | ${1} | ${2} | ${3}   | ${2}
    ${2} | ${5} | ${4} | ${100} | ${7}
  `('Base test: $n', ({ a, b, aim, result }) => {
    expect(getCountOfOperations(a, b, aim)).toBe(result);
  });
});
