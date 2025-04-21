const { getExpression } = require('./A');

describe('1571A. Sequence of Comparisons', () => {
  it.each`
    n    | map        | result
    ${1} | ${'>>>'}   | ${'>'}
    ${2} | ${'<><=<'} | ${'?'}
    ${3} | ${'='}     | ${'='}
    ${4} | ${'<<=='}  | ${'<'}
  `('Base test: $n', ({ map, result }) => {
    expect(getExpression(map)).toStrictEqual(result);
  });
});
