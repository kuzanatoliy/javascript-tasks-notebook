const { getCountOfOperations } = require('./A');

describe('2062A. String', () => {
  it.each`
    n    | mask                | result
    ${1} | ${'1'}              | ${1}
    ${2} | ${'000'}            | ${0}
    ${3} | ${'1001'}           | ${2}
    ${4} | ${'10101'}          | ${3}
    ${5} | ${'01100101011101'} | ${8}
  `('Base test: $n', ({ mask, result }) => {
    expect(getCountOfOperations(mask)).toBe(result);
  });
});
