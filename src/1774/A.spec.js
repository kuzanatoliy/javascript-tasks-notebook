const { getOperationsMap } = require('./A');

describe('1774A. Add Plus Minus Sign', () => {
  it.each`
    n    | str        | result
    ${1} | ${'11'}    | ${'-'}
    ${2} | ${'01101'} | ${'+-++'}
    ${3} | ${'10001'} | ${'+++-'}
  `('Base test: $n', ({ str, result }) => {
    expect(getOperationsMap(str)).toStrictEqual(result);
  });
});
