const { checkCountOfPermutations } = require('./A');

describe('144A. Arrival of the General', () => {
  it.each`
    n    | line                            | result
    ${1} | ${[33, 44, 11, 22]}             | ${2}
    ${2} | ${[10, 10, 58, 31, 63, 40, 76]} | ${10}
  `('Base test: $n', ({ line, result }) => {
    expect(checkCountOfPermutations(line)).toStrictEqual(result);
  });
});
