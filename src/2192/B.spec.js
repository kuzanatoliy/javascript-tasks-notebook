const { getCountOfOperations } = require('./B');

describe('2192B. Flipping Binary String', () => {
  it.each`
    n    | str       | result
    ${1} | ${'101'}  | ${[2]}
    ${2} | ${'100'}  | ${-1}
    ${3} | ${'0000'} | ${[]}
    ${4} | ${'1010'} | ${[1, 3]}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toStrictEqual(result);
  });
});
